import json


'''
Run this first:
aws pricing get-products --service-code "AmazonEC2" --filters "Type=TERM_MATCH,Field=instanceType,Value=c5.large" "Type=TERM_MATCH,Field=location,Value=US East (N. Virginia)" --max-items 1 --region us-east-1 > pricing.json
'''



# Load the JSON data from the file
with open('pricing.json', 'r') as file:
    data = json.load(file)

# Parse the JSON data to extract the USD price
price_list = data.get('PriceList', [])
if price_list:
    price_item = json.loads(price_list[0])
    terms = price_item.get('terms', {})
    on_demand = terms.get('OnDemand', {})
    on_demand_values = list(on_demand.values())
    if on_demand_values:
        price_dimensions = on_demand_values[0].get('priceDimensions', {})
        price_dimensions_values = list(price_dimensions.values())
        if price_dimensions_values:
            price_per_unit = price_dimensions_values[0].get('pricePerUnit', {})
            usd_price = price_per_unit.get('USD', 'USD price not found')
    else:
        usd_price = 'On-Demand prices not found'
else:
    usd_price = 'Price list is empty'

print('USD price:', usd_price)

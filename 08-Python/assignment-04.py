str = 'Qui labore Lorem ullamco esse adipisicing ad eu cupidatat commodo ea ullamco. Id et ad eu veniam consectetur. Ullamco ipsum sint proident amet do cupidatat cupidatat laboris mollit laborum ex irure non occaecat. Aliquip eu tempor nisi et qui non esse ad quis reprehenderit. Adipisicing adipisicing quis eu excepteur fugiat culpa et commodo exercitation exercitation. Deserunt duis labore officia nisi do nostrud anim laborum occaecat. Laborum Lorem reprehenderit sit aute ullamco fugiat nostrud adipisicing exercitation. Aute ex magna enim officia aliqua nostrud cupidatat.'

""" 
    Find the word size that occurs the most 
    Ex Output:
        5 letter words occurs the most with 15 occurrances    
"""

words = str.split(" ")
word_lengths = [len(word) for word in words]
print(word_lengths)

""" 
words_count_by_size = dict()
# for word_lenth in word_lengths:
#     if word_lenth not in words_count_by_size:
#         words_count_by_size[word_lenth] = 0
#     words_count_by_size[word_lenth] += 1
# print(words_count_by_size)

words_count_by_size = {no:word_lengths.count(no) for no in word_lengths }

max_word_size, max_word_size_count = 0, 0
for (size, count) in words_count_by_size.items():
    if (count > max_word_size_count):
        max_word_size, max_word_size_count = size, count

"""
max_word_size = max(word_lengths, key=word_lengths.count)
max_word_size_count = word_lengths.count(max_word_size)
print(f"{max_word_size} letter words occurs the most with {max_word_size_count} occurrences")

import { ComponentFixture, TestBed } from "@angular/core/testing"
import { GreeterComponent } from "./greeter.component"
import { By } from "@angular/platform-browser";

fdescribe("Greeter Component (Reference ONLY)", () => {

    // In memory environment where the component is live
    let greeterFixture : ComponentFixture<GreeterComponent>;

    // beforeEach will execute before executing any "describe" or "it"
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations : [GreeterComponent]
        })
        greeterFixture = TestBed.createComponent(GreeterComponent)
    });

    describe("Component Class Instance (state & behavior)",  () => {
        it("should have the default message", () => {

            // componentInstance = the object of the component class
            let greeterComponent = greeterFixture.componentInstance;

            expect(greeterComponent.message).toBe('A dummy message')
        })

        it("should set the message when greeted", () => {

            // componentInstance = the object of the component class
            let greeterComponent = greeterFixture.componentInstance;

            greeterComponent.onBtnGreetClick("Magesh");

            expect(greeterComponent.message).toBe('Hi Magesh! Good Morning!!')
        })
    });

    describe("Component Presentation", () => {
        it("should display the message from the component instance", () => {

            //render the component
            greeterFixture.detectChanges();

            //query the elements for assertion
            let divDebugElement = greeterFixture.debugElement.query(By.css("#divMessage"))
            let divHTMLElement = divDebugElement.nativeElement
            expect(divHTMLElement.textContent).toBe("A dummy message")
        })

        it("should display the message from the component instance when the message is changing", () => {

            
            // greeterFixture.componentInstance.message = 'test message'

            let greeterComponentInstance = greeterFixture.componentInstance;
            greeterComponentInstance.onBtnGreetClick('Magesh')

            //render the component
            greeterFixture.detectChanges();

            //query the elements for assertion
            let divDebugElement = greeterFixture.debugElement.query(By.css("#divMessage"))
            let divHTMLElement = divDebugElement.nativeElement
            expect(divHTMLElement.textContent).toBe('Hi Magesh! Good Morning!!')
        })

        it("should invoke onBtnGreetclick method when greet button is clicked", () => {

            //creating a spy on 'onBtnGreetClick' to check if the method is invoked when the button is clicked
            spyOn(greeterFixture.componentInstance, "onBtnGreetClick")
        
            // get the debugElement wrappter for the text box
            let userNameTxtDebugElement = greeterFixture.debugElement.query(By.css('input[type="text"]'))

            // set the value in the text box
            userNameTxtDebugElement.nativeElement.value = "Magesh";

            // get the debugElement wrapper for the greet button
            let greetBtnDebugElement = greeterFixture.debugElement.query(By.css('#btnGreet'));

            // trigger the click event of the button
            greetBtnDebugElement.triggerEventHandler('click')

            //render the component
            greeterFixture.detectChanges();

            //assert if the onBtnGreetClick() method is invoked when the button is clicked
            expect(greeterFixture.componentInstance.onBtnGreetClick).toHaveBeenCalledWith('Magesh');

            
        })

        it("should display the greet message when greet button is clicked", () => {

            // get the debugElement wrappter for the text box
            let userNameTxtDebugElement = greeterFixture.debugElement.query(By.css('input[type="text"]'))

            // set the value in the text box
            userNameTxtDebugElement.nativeElement.value = "Magesh";

            // get the debugElement wrapper for the greet button
            let greetBtnDebugElement = greeterFixture.debugElement.query(By.css('#btnGreet'));

            // trigger the click event of the button
            greetBtnDebugElement.triggerEventHandler('click')

            //render the component
            greeterFixture.detectChanges();

            //query the elements for assertion
            let divDebugElement = greeterFixture.debugElement.query(By.css("#divMessage"))
            let divHTMLElement = divDebugElement.nativeElement
            expect(divHTMLElement.textContent).toBe('Hi Magesh! Good Morning!!')
        })
    })

}) 
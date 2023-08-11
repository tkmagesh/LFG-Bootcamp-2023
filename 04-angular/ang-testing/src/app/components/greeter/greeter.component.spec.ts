import { ComponentFixture, TestBed } from "@angular/core/testing"
import { GreeterComponent } from "./greeter.component"

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


}) 
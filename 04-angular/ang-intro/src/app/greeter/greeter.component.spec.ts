import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GreeterComponent } from "./greeter.component";
import { By } from '@angular/platform-browser';

fdescribe('Greeter Component', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [GreeterComponent]
        })
    })

    it('should create the greeter', () => {
        let fixture: ComponentFixture<GreeterComponent> = TestBed.createComponent(GreeterComponent);
        let greeter: GreeterComponent = fixture.componentInstance;
        expect(greeter).toBeTruthy();
    });

    it('should have the default message', () => {
        let fixture: ComponentFixture<GreeterComponent> = TestBed.createComponent(GreeterComponent);
        let greeter: GreeterComponent = fixture.componentInstance;
        expect(greeter.message).toBe("A dummy message")
    })

    it('should display the default message', () => {
        let fixture: ComponentFixture<GreeterComponent> = TestBed.createComponent(GreeterComponent);
        let greeter: GreeterComponent = fixture.componentInstance;

        greeter.message = "test message";

        //force rendering
        fixture.detectChanges();

        const compiled = fixture.nativeElement as HTMLElement;
        expect(compiled.querySelector('#divMessage')?.textContent).toBe(greeter.message);
    })

    it('should display the greet message when greet button clicked', () => {
        let fixture: ComponentFixture<GreeterComponent> = TestBed.createComponent(GreeterComponent);
        
        // debug wrapper of the underlying dom node for testing
        const debugElement = fixture.debugElement; 

        //locate the text box
        const txtNameDebugEle = debugElement.query(By.css('input[type="text"]'))

        //get the underlying dom node
        const txtName = txtNameDebugEle.nativeElement;

        //set the value in the text
        txtName.value = "Magesh"

        //locate the button
        const btnGreetDebugEle = debugElement.query(By.css('#btnGreet'))

        // trigger the 'click' event on the button
        btnGreetDebugEle.triggerEventHandler("click");


        //force rendering
        fixture.detectChanges();

        const expectedResult = 'Hi Magesh! Good Morning!!'

        //locate the debug wrapper for the divMessage div
        const divMessageDebugEle = debugElement.query(By.css('#divMessage'))

        //get the underlying DOM Node from the debug wrapper
        const divMessage = divMessageDebugEle.nativeElement;

        // assert if the div has the greet message
        expect(divMessage?.textContent).toBe(expectedResult);
    })

})
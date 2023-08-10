import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GreeterComponent } from "./greeter.component";

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

    /* it('should display the greet message when greet button clicked', () => {
        let fixture: ComponentFixture<GreeterComponent> = TestBed.createComponent(GreeterComponent);
        let greeter: GreeterComponent = fixture.componentInstance;

        const compiled = fixture.nativeElement as HTMLElement;
        const txtName = compiled.querySelector('input[type="text"]') as HTMLInputElement
        txtName.value = "Magesh"

        compiled.querySelector('#btnGreet')
        //force rendering
        fixture.detectChanges();

        
        expect(compiled.querySelector('#divMessage')?.textContent).toBe(greeter.message);
    }) */

})
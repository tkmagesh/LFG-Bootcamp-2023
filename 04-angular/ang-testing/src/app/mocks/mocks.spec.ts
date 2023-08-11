fdescribe("mocks study", () => {
    it("should return the configured value", () => {
        // create a mock function and configure it to return a constant ("test result") when invoked
        const mockFn = jasmine.createSpy("MyMockFn").and.returnValue("test result")

        //invoke the mock function
        const result = mockFn()
        // const result = '';

        //verify the result
        expect(result).toBe("test result")
    })

    it("should verify the interaction (invocation)", () => {
        // create a mock function and configure it to return a constant ("test result") when invoked
        const mockFn = jasmine.createSpy("MyMockFn").and.returnValue("test result")

        //invoke the mock function
        mockFn()
        mockFn()

        // expect(mockFn).toHaveBeenCalled()
        expect(mockFn).toHaveBeenCalledTimes(2)
    })

    it("should verify the interaction (invocation with input)", () => {
        // create a mock function and configure it to return a constant ("test result") when invoked
        const mockFn = jasmine.createSpy("MyMockFn").and.returnValue("test result")

        //invoke the mock function
        mockFn(100)

        // expect(mockFn).toHaveBeenCalled()
        expect(mockFn).toHaveBeenCalledWith(100)
    })

    it("should verify the interaction (multiple invocations with varying inputs)", () => {
        // create a mock function and configure it to return a constant ("test result") when invoked
        const mockFn = jasmine.createSpy("MyMockFn").and.returnValue("test result")

        //invoke the mock function
        mockFn(100)
        mockFn(200)
        mockFn(300)

        expect(mockFn).toHaveBeenCalledTimes(3)
        expect(mockFn.calls.argsFor(0)).toEqual([100])
        expect(mockFn.calls.argsFor(1)).toEqual([200])
        expect(mockFn.calls.argsFor(2)).toEqual([300])
    })

    it("should verify the interaction (multiple invocations with varying inputs and outputs configured)", () => {
        // create a mock function and configure it to return a constant ("test result") when invoked
        const mockFn = jasmine.createSpy("MyMockFn")

        // configure the mockFn to return "result-1" if invoked with argument 100
        mockFn.withArgs(100, 'ABC').and.returnValue("result-1")
        mockFn.withArgs(200).and.returnValue("result-2")
        mockFn.withArgs(300).and.returnValue("result-3")

        //invoke the mock function
        const r1 = mockFn(100, 'ABC')
        expect(r1).toEqual("result-1")

        const r2 = mockFn(200)
        expect(r2).toEqual("result-2")

        const r3 = mockFn(300)
        expect(r3).toEqual("result-3")


        expect(mockFn).toHaveBeenCalledTimes(3)

        expect(mockFn.calls.argsFor(0)).toEqual([100, 'ABC'])
        expect(mockFn.calls.argsFor(1)).toEqual([200])
        expect(mockFn.calls.argsFor(2)).toEqual([300])
    })
})
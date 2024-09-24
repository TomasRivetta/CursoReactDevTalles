import { act, renderHook } from "@testing-library/react"
import { useCounter } from "../../src/hooks/useCounter"

describe('Pruebas en el useCounter', () => {
    test('Debe de retornar los valores por defecto', () => {

        //Nos trae el valor por defecto del hook si no paso nada
        const { result } = renderHook(() => useCounter())

        const { Counter, decrement, increment, reset } = result.current

        expect(Counter).toBe(10)
        expect(decrement).toEqual(expect.any(Function))
        expect(increment).toEqual(expect.any(Function))
        expect(decrement).toEqual(expect.any(Function))
        expect(reset).toEqual(expect.any(Function))


    })

    test('Debe de generar el counter con el valor de 100', () => {

        const { result } = renderHook(() => useCounter(100))

        const { Counter } = result.current

        expect(Counter).toBe(100)

    })

    test('Debe de incrementar el contador', () => {
        const { result } = renderHook(() => useCounter(100))

        const { Counter, increment } = result.current

        act(() => {
            increment();
            increment(2);
        })

        //Porque necesitamos el resultado actual
        expect(result.current.Counter).toBe(103)
    })

    test('Debe de decrementar el contador', () => {
        const { result } = renderHook(() => useCounter(100))

        const { Counter, decrement } = result.current

        act(() => {
            decrement();
            decrement(2);
        })

        //Porque necesitamos el resultado actual
        expect(result.current.Counter).toBe(97)
    })

    test('Debe de realizar el reset del contador', () => {
        const { result } = renderHook(() => useCounter(100))

        const { Counter, increment, reset } = result.current

        act(() => {
            increment()
            reset()
        })

        //Porque necesitamos el resultado actual
        expect(result.current.Counter).toBe(100)
    })
})
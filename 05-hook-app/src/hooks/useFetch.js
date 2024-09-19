import { useEffect, useState } from "react"

const localCache = {

}

export const useFetch = (url) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: false,
        errorMessage: null
    })

    useEffect(() => {

        getFetch()

    }, [url]);

    //Para que cada vez que cambie la url se llama para cargar
    const setLoadingState = () => {
        setState({
            data: null,
            isLoading: true,
            hasError: false,
            errorMessage: null
        })
    }


    const getFetch = async () => {


        if (localCache[url]) {

            console.log('Usando cache');

            setState({
                data: localCache[url],
                isLoading: false,
                hasError: false,
                errorMessage: null
            })

            return
        }

        setLoadingState()

        const resp = await fetch(url)

        //sleep - esto se va a usar para prevenir el hecho de que tarde la conexion
        await new Promise(resolve => setTimeout(resolve, 1500))


        if (!resp.ok) {
            setState({
                data: null,
                isLoading: false,
                hasError: true,
                errorMessage: {
                    code: resp.status,
                    message: resp.statusText
                }
            });
            return
        }

        const data = await resp.json();

        setState({
            data: data,
            isLoading: false,
            hasError: false,
            errorMessage: null
        })

        //Manejo del cache
        localCache[url] = data;

    }

    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError
    }
}

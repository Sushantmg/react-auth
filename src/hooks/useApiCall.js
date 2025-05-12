import { useEffect, useState } from "react";

export function useApiCall(apiFunction) {
    const [data, setData] = useState(undefined);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        let isMounted = true;
        setLoading(true);

        apiFunction()
            .then((res) => {
                if (isMounted) {
                    setData(res.data);
                    setLoading(false);
                }
            })
            .catch((err) => {
                if (isMounted) {
                    setError(err);
                    setLoading(false);
                }
            });

        return () => {
            isMounted = false;
        };
    }, [apiFunction]);

    return { data, loading, error };
}

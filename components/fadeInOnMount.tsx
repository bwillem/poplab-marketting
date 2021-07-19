import { Fade } from "@chakra-ui/react"
import { useEffect, useState } from "react"

function FadeInOnMount({ time = 300, ...rest }) {
	const [loaded, setLoaded] = useState(false)

	useEffect(() => {
		setTimeout(() => setLoaded(true), 300)
	}, [])

	return (
		<Fade
			in={loaded}
			{...rest}
		/>
	)
}

export default FadeInOnMount

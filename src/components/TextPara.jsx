import {Text} from "@react-three/drei"
import { useThree} from "@react-three/fiber";



const TextParagraph = () => {

    const {viewport} = useThree()

  return (
    <>
      <Text position={[0,0,1]} fontSize={viewport.width / 12}  font="/Font/NeueRegradeBold.otf">
    Creative Developer
      </Text>
    </>
  );
}

export default TextParagraph;

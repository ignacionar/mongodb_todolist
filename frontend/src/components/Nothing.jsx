import { Box, Text } from "@chakra-ui/react"
import { motion } from "framer-motion"

const Nothing = () => {
  return (
    <motion.div whileHover={{scale: 1.05}}>
      <Box w={'300px'} borderWidth={'1px'} borderRight={'lg'} overflow={'hidden'} bg={'white'} m={5}>
        <Box p={'6'} display={'flex'} flexDirection={'column'} >
          <Text as='h1' fontSize={'25px'} fontWeight={'600'}>
            There isn't any todo!
          </Text>
        </Box>
      </Box>
    </motion.div>
  )
}

export default Nothing;

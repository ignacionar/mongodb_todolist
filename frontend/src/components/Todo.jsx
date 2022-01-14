import { Box, Button, Text } from "@chakra-ui/react"
import { motion } from "framer-motion"
import { useMutation, useQueryClient } from "react-query"

const Todo = ({ todo }) => {

  const queryClient = useQueryClient();

  const mutationDelete = useMutation((deleteTodo) => fetch(`http://localhost:5000/api/v1/todo/${deleteTodo._id}`, {
    method: 'DELETE',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(deleteTodo),
  }), {
    onSuccess: () => {
      queryClient.invalidateQueries('todo')
    }
  });

  return (
    <motion.div whileHover={{scale: 1.05}}>
      <Box w={'300px'} borderWidth={'1px'} borderRight={'lg'} overflow={'hidden'} bg={'white'} m={5}>
        <Box p={'6'} display={'flex'} flexDirection={'column'} >
          <Text as='h1' fontSize={'25px'} fontWeight={'600'}
            >
            {todo.description}
          </Text>
          <Button mt={'10'} bg={'#7928CA'} _hover={{bg: '#9e47f5', fontWeight: '700'}} color={'white'} fontWeight={'600'}
          onClick={() => 
            mutationDelete.mutate(todo)
          }>
            Complete
          </Button>
        </Box>
      </Box>
    </motion.div>
  )
}

export default Todo;

import {
  FormControl,
  FormLabel,
  Box,
  Input, 
  Flex,
  Button
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useQueryClient, useMutation } from 'react-query';

const FormTodo = () => {

  const queryClient = useQueryClient();
  const mutation = useMutation( (newTodo) => fetch('http://localhost:5000/api/v1/todo', {
    method: 'POST',
    headers: {
      "Content-Type":"application/json"
    },
    body: JSON.stringify(newTodo),
  }), {
    onSuccess: () => {
      queryClient.invalidateQueries('todo')
    }
  });
  
  const [todo, setTodo] = useState('');

  return (
    <Box w={'600px'} borderWidth={'1px'} borderRight={'lg'} overflow={'hidden'} bg={'white'} m={5} p={'10'} boxShadow={'base'}>
      <Flex alignItems={'center'} justifyContent={'center'}>
        <FormControl id='todo' w={'80%'}>
          <FormLabel>Create Todo!</FormLabel>
          <Input type={'text'} value={todo} onChange={(e) => setTodo(e.target.value)}></Input>
          <Button mt={'10'} bg={'#7928CA'} _hover={{bg: '#9e47f5', fontWeight: '700'}} color={'white'} fontWeight={'600'}
          onClick={() => 
            mutation.mutate({description: todo})
          }
          >
            Create Todo!
          </Button>
        </FormControl>
      </Flex>
    </Box>
  )
}

export default FormTodo;
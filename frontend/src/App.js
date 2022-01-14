import './App.css';
import { useQuery } from 'react-query'
import { Box, ChakraProvider, Flex } from '@chakra-ui/react'
import Todo from './components/Todo';
import FormTodo from './components/FormTodo';
import Nothing from './components/Nothing';

function App() {

  const {isLoading, isError, data, error} = useQuery('todo', () => 
    fetch('http://localhost:5000/api/v1/todo').then((res) =>
    res.json())
  )

  return (
        <ChakraProvider>
          <Box backgroundColor={'gray.100'} minHeight={'100vh'} py={16}>
            <Flex as='main' alignItems='center' justifyContent={'flex-start'} flexDirection={'column'} margin={'10 auto'}>
            <FormTodo/>
            {
              isLoading ? <div>Loading....</div> : ""
            }
            {
              data?.data.length > 0 ? 
              data.data.map(todo => <Todo key={todo._id} todo={todo} />)
              : <Nothing></Nothing>
            }

            
            </Flex>
          </Box>
        </ChakraProvider>
  );
}

export default App;

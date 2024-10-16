import {
  Box,

} from '@chakra-ui/react';
import Todoform from './components/fragments/todo/Todoform';
import TodoTable from './components/fragments/todo/TodoTable';





const App = () => {

  return (
    <Box p={6} bg="#f0f0f0" minH="100vh" display="flex" justifyContent="center" alignItems="center">
      <Box width="100%" maxW="1200px" bg="#FFF" p={6} borderRadius="8px" boxShadow="8px 8px 0 #000" border="4px solid #000">
        
        {/* Form Section */}
        <Todoform/>

        {/* Table Section */}
        <TodoTable/>
      </Box>
    </Box>
  );
};

export default App;

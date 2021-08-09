import axios from 'axios'
import  users from '../Users';

jest.mock('axios')
 
test('should fetch user', () => {
    const users = [{name:'Bob'}];
    const resp = {data:users}
    axios.get.mockResolvedValue(resp);
    
    
    // return UsersList.all().then(data => expect(data).toEqual(users));

    

  })
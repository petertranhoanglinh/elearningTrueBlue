package trueblue.elearning.user.service;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import trueblue.elearning.user.dao.UserDao;

@Service
public class CustormerUserDetailsService  implements UserDetailsService{
	@Autowired private UserDao _userdao;



	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		
		
		
	    
		return null;
	}

}

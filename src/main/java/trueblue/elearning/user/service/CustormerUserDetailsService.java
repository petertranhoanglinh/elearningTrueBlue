package trueblue.elearning.user.service;



import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import trueblue.elearning.user.dao.UserDao;
import trueblue.elearning.user.model.UserModel;

@Service
public class CustormerUserDetailsService  implements UserDetailsService{
	@Autowired private UserDao _userdao;



	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		
		List<UserModel> user = new ArrayList<UserModel>();
		user =     _userdao.ListGroup();
		
		for(int i = 0; i <= user.size(); i++) {
			if(user.get(i).getEmail().equals(username)) {
				List<GrantedAuthority> grantList = new ArrayList<GrantedAuthority>();
				GrantedAuthority autoAuthority = new SimpleGrantedAuthority("ADMIND");
				grantList.add(autoAuthority);
				
				
			   String password =  user.get(i).getPassword();
		       UserDetails userDetails = new User(username, password, grantList);
		       return userDetails;
		    		   
			}else {
			     new UsernameNotFoundException("loginFail");
			}
			return null;
			
		}
		
		
		
		
	    
		return null;
	}

}

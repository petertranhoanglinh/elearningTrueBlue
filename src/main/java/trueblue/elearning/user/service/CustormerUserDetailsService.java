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
		Boolean check = false;
		String password1 = "";
		String username1 = "";
		List<UserModel> user = new ArrayList<UserModel>();
		user =     _userdao.ListGroup();
		
		
		for(int i = 0; i <= user.size(); i++) {
			
			if(user.get(i).getEmail().equals(username)) {
				username1 = user.get(i).getEmail();
				password1 = user.get(i).getPassword();
				check = true;
				break;
			}
			
			
		 }
		if(check == true){
			System.out.println(username1);
			System.out.println(password1);
			List<GrantedAuthority> grantList = new ArrayList<GrantedAuthority>();
			GrantedAuthority autoAuthority = new SimpleGrantedAuthority("ADMIND");
			grantList.add(autoAuthority);
	        UserDetails userDetails = new User(username1, password1, grantList);
	       return userDetails;
		}else{
			new UsernameNotFoundException("loginFail");
		}
	
		
		
		return null;
		
		
		
		
	    
	
	}

}

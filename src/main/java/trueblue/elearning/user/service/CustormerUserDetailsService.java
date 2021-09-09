package trueblue.elearning.user.service;



import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
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
	String getUsername;


    

	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		String password1 = "";
		String username1 = "";
		List<UserModel> user = new ArrayList<UserModel>();
		user =     _userdao.findByEmailReal(username);
			if(user.get(0).getEmail().equals(username)) {
				username1 = user.get(0).getEmail();
				password1 = user.get(0).getPassword();
				List<GrantedAuthority> grantList = new ArrayList<GrantedAuthority>();
				GrantedAuthority autoAuthority = new SimpleGrantedAuthority("ADMIND");
				grantList.add(autoAuthority);
		        UserDetails userDetails = new User(username1, password1, grantList);
		        getUsername = username1;
		        return userDetails;
		        
			}else{
				new UsernameNotFoundException("loginFail");
			}
		return null;
	}
	@Bean
	public String getUsername() {
		// TODO Auto-generated method stub
		return getUsername;
	}

}

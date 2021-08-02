package trueblue.elearning.config;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import trueblue.elearning.user.service.CustormerUserDetailsService;



@Configuration
@EnableWebSecurity

public class SecurityConfig extends WebSecurityConfigurerAdapter{
	@Autowired
	CustormerUserDetailsService _custormerUser;
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http
			.authorizeRequests()
			    .antMatchers("/logout", "/resources/**", "/css/**", "/images/**", "/js/**", "/upload/**","/hello").permitAll()
				.anyRequest().authenticated()
				.and()
			.formLogin()
				.loginPage("/login")
				.permitAll()
				.defaultSuccessUrl("/goal")
				.failureUrl("/login?success=fail")
				.loginProcessingUrl("/j_spring_security_check")
				.and()
			.logout()
			    .logoutUrl("/logout")
				.permitAll();	
		     
		
	}
	

	
	@Override
	protected void configure(final AuthenticationManagerBuilder auth) throws Exception {
//	    auth.inMemoryAuthentication()
//	        .withUser("user1").password(passwordEncoder().encode("user1Pass")).roles("USER");
	        auth.userDetailsService(_custormerUser).passwordEncoder(passwordEncoder());
	        
	      
	      
	      
	}
	@Bean 
	public PasswordEncoder passwordEncoder() { 
	    return new BCryptPasswordEncoder(); 
	}
	
	
	

}

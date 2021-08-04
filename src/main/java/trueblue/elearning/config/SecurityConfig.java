package trueblue.elearning.config;
import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.logout.LogoutSuccessHandler;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.security.web.authentication.rememberme.InMemoryTokenRepositoryImpl;
import org.springframework.security.web.authentication.rememberme.PersistentTokenRepository;

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
			    .antMatchers("/login","/logout","/resources/**", "/css/**", "/images/**", "/js/**", "/upload/**").permitAll()
				.anyRequest().authenticated();
				
				 http.authorizeRequests().and().formLogin()
				.loginProcessingUrl("/login")
				.loginPage("/login") 
				.defaultSuccessUrl("/")
				.failureUrl("/login?success=fail")
				.usernameParameter("username")//
		        .passwordParameter("password")
		        .and().logout()
		        .logoutUrl("/logout")
		        .logoutSuccessUrl("/login");
		         http.authorizeRequests().and() //
		                .rememberMe()
		                .tokenRepository(this.persistentTokenRepository()) //
		                .tokenValiditySeconds(1 * 24 * 60 * 60); // 24h
			}
			
			@Bean
			public PersistentTokenRepository persistentTokenRepository() {
			    InMemoryTokenRepositoryImpl memory = new InMemoryTokenRepositoryImpl();
			    return memory;
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

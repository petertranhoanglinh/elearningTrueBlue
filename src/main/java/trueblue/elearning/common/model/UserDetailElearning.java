package trueblue.elearning.common.model;

import java.util.Collection;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

public class UserDetailElearning implements UserDetails{
	
	
	private static final long serialVersionUID = 1L;


	private Collection<? extends GrantedAuthority> authorities;
	private String password;

	private String username;

	private Boolean enabled;

	private Boolean accountNonExpired;

	private Boolean accountNonLocked;

	private boolean credentialsNonExpired;
	
	
	
	
	public UserDetailElearning(String username, String password, Boolean enabled, Collection<? extends GrantedAuthority> authorities) {
	    this.enabled=enabled;
	    this.username=username;
	    this.password=password;
	    this.accountNonExpired=true;
	    this.accountNonLocked=true;
	    this.credentialsNonExpired=true;
	    this.authorities=authorities;
	}

	public UserDetailElearning(String password, String username, Boolean enabled, Boolean accountNonExpired, Boolean accountNonLocked, boolean credentialsNonExpired, Collection<? extends GrantedAuthority> authorities) {
        this.authorities = authorities;
        this.password = password;
        this.username = username;
        this.enabled = enabled;
        this.accountNonExpired = accountNonExpired;
        this.accountNonLocked = accountNonLocked;
        this.credentialsNonExpired = credentialsNonExpired;
    }

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		// TODO Auto-generated method stub
		return authorities;
	}

	@Override
	public String getPassword() {
		// TODO Auto-generated method stub
		return password;
	}

	@Override
	public String getUsername() {
		// TODO Auto-generated method stub
		return username;
	}

	@Override
	public boolean isAccountNonExpired() {
		// TODO Auto-generated method stub
		return accountNonExpired;
	}

	@Override
	public boolean isAccountNonLocked() {
		// TODO Auto-generated method stub
		return accountNonLocked;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		// TODO Auto-generated method stub
		return credentialsNonExpired;
	}

	@Override
	public boolean isEnabled() {
		// TODO Auto-generated method stub
		return enabled;
	}
	 public void eraseCredentials(){
	        this.password=null;
	    }

	



}

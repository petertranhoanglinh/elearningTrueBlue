package trueblue.elearning.user.service;
import trueblue.elearning.user.dto.UserDto;
import trueblue.elearning.user.model.UserModel;
import trueblue.elearning.user.model.Users;

import java.util.List;

import javax.mail.internet.AddressException;

import org.springframework.data.domain.Pageable;




public interface UserService {
	public 	List<UserModel> getUserByEmail(String fullname);

	public List<UserModel> getUserByEmailReal(String email);
	
	public Users addUser(UserDto userDto);

	public void updateAccount( UserDto userDto);
	public boolean checkEmailReal(String email);

}

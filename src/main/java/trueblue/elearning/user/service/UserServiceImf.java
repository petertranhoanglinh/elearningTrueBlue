package trueblue.elearning.user.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.ui.Model;

import trueblue.elearning.user.dao.UserDao;
import trueblue.elearning.user.dto.UserDto;
import trueblue.elearning.user.model.UserModel;
import trueblue.elearning.user.model.Users;

@Service
public class UserServiceImf implements UserService {
	@Autowired
	UserDao userdao;
	

	@Override
	public List<UserModel> getUserByEmail(String fullname) {
		// TODO Auto-generated method stub
		if(fullname.equals("")) {
			fullname = "1";
		}
		return userdao.findByEmail(fullname);
	}

	@Override
	public List<UserModel> getUserByEmailReal(String email) {
		// TODO Auto-generated method stub
		return userdao.findByEmailReal(email);
	}

	@Override
	public Users addUser(UserDto userDto) {
		// TODO Auto-generated method stub
		Users newUser = new Users();
		newUser.setFullname(userDto.getFullname());
		newUser.setEmail(userDto.getEmail());
		String password = new BCryptPasswordEncoder().encode(userDto.getPassword());
        newUser.setPassword(password);
        newUser.setStatus("Active");
        newUser.setPhone(userDto.getPhone());
        newUser.setAvatar(userDto.getFullname());
        newUser.setAddress(userDto.getAddress());
		return userdao.save(newUser);
	}
	
	
	@Override
	public void updateAccount(UserDto userDto) {
		// TODO Auto-generated method stub
		if(userDto.getNewPass().equals("") || userDto.getNewPass() == null) {
			userDto.setNewPass(userDto.getPassword());
		}
		String password = new BCryptPasswordEncoder().encode(userDto.getNewPass());
		userDto.setPassword(password);
		userdao.Account(userDto.getEmail(), userDto.getFullname() ,userDto.getAddress()
				,userDto.getAvatar(),userDto.getPhone(), userDto.getPassword());
	}
	

}

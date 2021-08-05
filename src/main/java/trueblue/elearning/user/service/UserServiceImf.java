package trueblue.elearning.user.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import trueblue.elearning.user.dao.UserDao;
import trueblue.elearning.user.model.UserModel;

@Service
public class UserServiceImf implements UserService{
@Autowired UserDao userdao;
	@Override
	public List<UserModel> getUserByEmail(String fullname) {
		// TODO Auto-generated method stub
		return userdao.findByEmail(fullname);
	}
	


}

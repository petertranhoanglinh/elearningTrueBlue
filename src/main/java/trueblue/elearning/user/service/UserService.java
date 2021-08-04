package trueblue.elearning.user.service;
import trueblue.elearning.user.model.UserModel;

import java.util.List;

import org.springframework.stereotype.Service;

@Service
public interface UserService {
	public 	List<UserModel> getUserByEmail(String email);

}

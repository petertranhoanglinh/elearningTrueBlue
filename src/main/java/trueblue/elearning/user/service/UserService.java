package trueblue.elearning.user.service;
import trueblue.elearning.user.model.UserModel;

import java.util.List;




public interface UserService {
	public 	List<UserModel> getUserByEmail(String fullname);

	public List<UserModel> getUserByEmailReal(String email);

}

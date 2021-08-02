package trueblue.elearning.user.controller;




import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import trueblue.elearning.user.dao.UserDao;
import trueblue.elearning.user.model.UserModel;


@Controller

public class login {
	@Autowired private UserDao userdao;
	
	@RequestMapping(value = "/login",method = RequestMethod.GET)
	public String index21() {
		
		return "login/login";

	}
	@RequestMapping(value = "/test",method = RequestMethod.GET)
	public String index2() {
		
		return "login/hello";

	}
	
	
	@RequestMapping(value = "/hello",method = RequestMethod.GET)
	public @ResponseBody List<UserModel> testData() {
		List<UserModel> userDao = userdao.ListGroup();
		return userDao;

	}
	
	
	



}

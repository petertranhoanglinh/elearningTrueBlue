package trueblue.elearning.user.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
@Controller
@RequestMapping("/user")
public class UserController {
	
	@RequestMapping("/login")
	public String index(Model model, HttpServletRequest request){
		return "login/login" ;
	}
	@RequestMapping("/user")
	public String wiewHelloSpring() {
		return "hello welcome spring with true blue";	
		
	}

	
	


}

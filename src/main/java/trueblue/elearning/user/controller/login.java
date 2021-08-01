package trueblue.elearning.user.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
@Controller

public class login {
	
	@RequestMapping("/login")
	public String index(Model model, HttpServletRequest request){
		return "login/login" ;
	}
	@RequestMapping("/hello")
	public @ResponseBody String wiewHelloSpring() {
		return "hello welcome spring with true blue";	
		
	}

	
	


}

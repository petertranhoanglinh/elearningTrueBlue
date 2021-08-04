package trueblue.elearning.user.controller;




import java.io.IOException;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import trueblue.elearning.user.dao.UserDao;
import trueblue.elearning.user.model.UserModel;


@Controller

public class LoginController {
	@Autowired private UserDao userdao;
	
	@RequestMapping(value = "/login",method = RequestMethod.GET)
	public String index21() {
		
		return "login/login";

	}
	@RequestMapping(value = "/",method = RequestMethod.GET)
	public String index2() {
		
		return "login/imformation";

	}

    @RequestMapping(value = "/logout", method = RequestMethod.GET)
    public void logoutPage(HttpServletRequest request, HttpServletResponse response) throws IOException {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (auth != null) {
            new SecurityContextLogoutHandler().logout(request, response, auth);
        }
        response.sendRedirect("/login/login");
	
       
        
      
    }
	
	
	@RequestMapping(value = "/hello",method = RequestMethod.GET)
	public @ResponseBody List<UserModel> testData() {
		List<UserModel> userDao = userdao.ListGroup();
		return userDao;

	}
	
	
	



}

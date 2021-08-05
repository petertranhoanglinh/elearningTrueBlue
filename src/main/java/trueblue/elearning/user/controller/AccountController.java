package trueblue.elearning.user.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import trueblue.elearning.user.service.CustormerUserDetailsService;

@Controller
@RequestMapping("/account")

public class AccountController {
	@Autowired private CustormerUserDetailsService cus;
	
	@RequestMapping(value = "",method = RequestMethod.GET)
	public String accountPage(Model model) {
		String username = cus.getUsername();
		System.out.println(username);
		model.addAttribute("userName",username);
		
		
		return "account/account";

	}
	

}

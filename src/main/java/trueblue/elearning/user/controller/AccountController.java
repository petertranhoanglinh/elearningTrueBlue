package trueblue.elearning.user.controller;

import java.io.IOException;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpRequest;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import trueblue.elearning.user.dao.UserDao;
import trueblue.elearning.user.dto.UserDto;
import trueblue.elearning.user.model.UserModel;
import trueblue.elearning.user.model.Users;
import trueblue.elearning.user.service.CustormerUserDetailsService;
import trueblue.elearning.user.service.UserService;

@Controller
@RequestMapping("/account")

public class AccountController {
	@Autowired
	private CustormerUserDetailsService cus;
	@Autowired
	private UserService userService;


	@RequestMapping(value = "", method = RequestMethod.GET)
	public String accountPage(Model model,UserDto userDto) {
		String email = cus.getUsername();
		System.out.println(email);
		 model.addAttribute("emailReal",email);
		String fullname;
		String email1;
		String phone;
		String status;
		String address;
		String avatar;
		String password;

		List<UserModel> userList;

		if (email == null) {
			email = "";
			fullname = "";
			email1 = "";
			phone = "";
			status = "";
			address = "";
			avatar = "";
			password = "";

		} else {
			userList = userService.getUserByEmailReal(email);
			fullname = userList.get(0).getFullname();
			email1 = userList.get(0).getEmail();
			phone = userList.get(0).getPhone();
			status = userList.get(0).getStatus();
			address = userList.get(0).getAddress();
			avatar = userList.get(0).getAvatar();
			password = userList.get(0).getPassword();
			
			
			
		}

		model.addAttribute("fullname", fullname);
		model.addAttribute("email", email1);
		model.addAttribute("phone", phone);
		model.addAttribute("status", status);
		model.addAttribute("address", address);
		model.addAttribute("avatar", avatar);
		model.addAttribute("password", password);

		System.out.println(email);
		//

		return "account/account";

	}

	@RequestMapping("/linkgetAccount")
	public String getAccount(@RequestParam(value = "account", required = false) String account, Model model,UserDto userDto) {
		String email = cus.getUsername();
		System.out.println(email);
		 model.addAttribute("emailReal",email);
		String fullname;
		String email1;
		String phone;
		String status;
		String address;
		String avatar;

		List<UserModel> userList;

		if (account == null) {
			account = "";
			fullname = "";
			email1 = "";
			phone = "";
			status = "";
			address = "";
			avatar = "";

		} else {
			userList = userService.getUserByEmailReal(account);
			fullname = userList.get(0).getFullname();
			email1 = userList.get(0).getEmail();
			phone = userList.get(0).getPhone();
			status = userList.get(0).getStatus();
			address = userList.get(0).getAddress();
			avatar = userList.get(0).getAvatar();
		}

		model.addAttribute("fullname", fullname);
		model.addAttribute("email", email1);
		model.addAttribute("phone", phone);
		model.addAttribute("status", status);
		model.addAttribute("address", address);
		model.addAttribute("avatar", avatar);

		return "account/account";
	}
	
	@RequestMapping(value = "/saveUpdate", method = RequestMethod.POST)
	
	 public void UpdateAccount(@ModelAttribute("userDto") UserDto userDto,Model model, HttpServletResponse response) throws IOException {
		
		
		
		List<UserModel> userList;
		userList = userService.getUserByEmailReal(cus.getUsername());
		String password = userList.get(0).getPassword();
		BCryptPasswordEncoder encoder =  new BCryptPasswordEncoder();
		Boolean checkPassword = encoder.matches(userDto.getPassword(), password);
		if(checkPassword == true && cus.getUsername().equals(userDto.getEmail())) {
			userService.updateAccount(userDto);
			response.sendRedirect("/account?fail=fail");
		}else {
			response.sendRedirect("/account?fail=true");
		}
		
		
		
	}
	
	
	
	 
	
	

}

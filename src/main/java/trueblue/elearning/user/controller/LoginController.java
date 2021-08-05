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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import trueblue.elearning.user.dao.UserDao;
import trueblue.elearning.user.model.UserModel;
import trueblue.elearning.user.service.UserService;

@Controller

public class LoginController {
	@Autowired
	private UserDao userdao;
	@Autowired
	private UserService userService;

	@RequestMapping(value = "/login", method = RequestMethod.GET)
	public String index21(HttpServletRequest request, HttpServletResponse response, Model model) {

		return "login/login";

	}

	@RequestMapping(value = { "/home", "/", "login/login" }, method = RequestMethod.GET)
	public String index2(Model model) {
		List<UserModel> userDao = userdao.ListGroup();
		model.addAttribute("userDao", userDao);

		return "login/home";

	}

	@RequestMapping(value = "/logout", method = RequestMethod.GET)
	public void logoutPage(HttpServletRequest request, HttpServletResponse response) throws IOException {
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		if (auth != null) {
			new SecurityContextLogoutHandler().logout(request, response, auth);
		}
		response.sendRedirect("/login/login");

	}

	@RequestMapping(value = "/getDashBordUser", method = RequestMethod.GET)
	public @ResponseBody List<UserModel> getDashBordUser(Model model) {
		try {
			List<UserModel> userDao = userdao.ListGroup();
			return userDao;

		} catch (Exception e) {

			return null;
		}

	}

	@RequestMapping(value = "/course", method = RequestMethod.GET)
	public String coursePage() {

		return "course/course";

	}

	@RequestMapping(value = "/hello", method = RequestMethod.GET)
	public @ResponseBody List<UserModel> textData() {
		List<UserModel> userList;
		userList = userdao.ListGroup();

		return userList;

	}

	@RequestMapping("/getbyfullname")
	public String getbyFullname(@RequestParam(value = "fullname", required = false) String fullname, Model model) {
		List<UserModel> userDao;
		userDao = userService.getUserByEmail(fullname);
		model.addAttribute("userDao", userDao);

		return "login/home";
	}

}

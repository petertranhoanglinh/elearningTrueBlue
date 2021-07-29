package trueblue.elearning.utils;

import java.util.LinkedList;
import java.util.List;

import org.springframework.validation.BindingResult;
import org.springframework.validation.ObjectError;

public class ErrorUtils {
	public static Object errorOf(String message) {
		List<String> messages = new LinkedList<String>();
		messages.add(message);
		return messages;
	}

	public static Object getErrorMessages(BindingResult bindingResult) {
		List<String> messages = new LinkedList<>();
		List<ObjectError> errors = bindingResult.getAllErrors();
		
		for (ObjectError error : errors) {
			messages.add(error.getDefaultMessage());
		}
		
		return messages;
	}
}

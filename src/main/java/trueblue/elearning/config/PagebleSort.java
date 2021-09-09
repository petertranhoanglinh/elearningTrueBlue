package trueblue.elearning.config;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.support.PagedListHolder;
import org.springframework.ui.Model;

public class PagebleSort<t> {
	public  void Pageble(Model model 
			, List<t> list,PagedListHolder<?> pages,int pageNumber
			,HttpServletRequest request,String path,
			String SetAtribuite) {
		int pagesize = 3;
		if (pages == null) {
			pages = new PagedListHolder<>(list);
			pages.setPageSize(pagesize);
		} else {
			final int goToPage = pageNumber - 1;
			if (goToPage <= pages.getPageCount() && goToPage >= 0) {
				pages.setPage(goToPage);
			}
		}
		request.getSession().setAttribute(SetAtribuite, pages);
		int current = pages.getPage() + 1;
		int begin = Math.max(0, current - list.size());
		int end = Math.min(begin + 5, pages.getPageCount());
		int totalPageCount = pages.getPageCount();
		String baseUrl = path;
		model.addAttribute("beginIndex", begin);
		model.addAttribute("endIndex", end);
		model.addAttribute("currentIndex", current);
		model.addAttribute("totalPageCount", totalPageCount);
		model.addAttribute("baseUrl", baseUrl);
		model.addAttribute("employees", pages);
		
	
		
	}

}

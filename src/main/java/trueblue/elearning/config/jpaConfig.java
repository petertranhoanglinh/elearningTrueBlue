package trueblue.elearning.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.domain.AuditorAware;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

import trueblue.elearning.commonData.AuditorAwareImpl;

@Configuration
@EnableJpaAuditing(auditorAwareRef = "auditorAware")
public class jpaConfig {
	@Bean
	AuditorAware<String> auditorAware(){
		return new AuditorAwareImpl();
	}
	

}

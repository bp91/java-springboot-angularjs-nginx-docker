package it.testwebapp_mvn;

import static org.junit.Assert.assertEquals;

import java.util.List;
import java.util.Map;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.google.common.collect.ImmutableMap;

import it.testwebapp_mvn.service.UserService;

@RunWith(SpringRunner.class)
@SpringBootTest
public class TestwebappMvnApplicationTests {
	
	@Autowired
    private UserService userService;

	@Test
	public void contextLoads() {
	}
	
	@Test
	public void aTest() {
		int a = 1;
		
		assertEquals(a, 1);
	}
	
	@Test
	public void checkUserBrunoTest() {
		
		List<Map<String, Object>> users = this.userService.getUsers();
		
		String mapToCompare = "";
		
		for(Map<String, Object> map : users) {
			if(map.containsValue("brn.pistone@gmail.com")) {
				mapToCompare = map.toString();
			}
		}
		
		assertEquals(mapToCompare, ImmutableMap.of(
				"SURNAME", "Pistone",
				"CREATIONTIME", "2018-09-19 08:37:18.466773",
				"ID", "1",
				"EMAIL", "brn.pistone@gmail.com",
				"NAME", "Bruno").toString());
	}

}

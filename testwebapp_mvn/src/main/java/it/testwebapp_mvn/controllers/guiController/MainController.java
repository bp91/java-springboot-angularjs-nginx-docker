package it.testwebapp_mvn.controllers.guiController;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MainController {

    @RequestMapping("/testwebapp")
    public String home() {
        return "index";
    }
}

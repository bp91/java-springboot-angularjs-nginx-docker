package it.testWebapp.guicontroller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MainController {

    @RequestMapping("/testWebapp")
    public String home() {
        return "index";
    }
}
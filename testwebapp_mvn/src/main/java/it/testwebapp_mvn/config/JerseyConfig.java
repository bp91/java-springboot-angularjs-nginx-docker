package it.testwebapp_mvn.config;

import javax.ws.rs.ApplicationPath;

import org.glassfish.jersey.media.multipart.MultiPartFeature;
import org.glassfish.jersey.server.ResourceConfig;
import org.springframework.stereotype.Component;

@Component
@ApplicationPath("/api")
public class JerseyConfig extends ResourceConfig {

    public JerseyConfig() {
    	packages("it.testwebapp_mvn.endpoint.config");
        packages("it.testwebapp_mvn.endpoint");
        register(MultiPartFeature.class);
    }
}

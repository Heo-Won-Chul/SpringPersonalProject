package com.tistory.heowc;

import org.junit.FixMethodOrder;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.MethodSorters;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
@FixMethodOrder(MethodSorters.NAME_ASCENDING)
public class RedisTest {

    @Autowired
    StringRedisTemplate stringRedisTemplate;

    @Test
    public void test1_set() throws Exception {
        stringRedisTemplate.opsForValue().set("key", "value");
    }

    @Test
    public void test2_get() throws Exception {
        System.out.println(stringRedisTemplate.opsForValue().get("key"));
    }
}

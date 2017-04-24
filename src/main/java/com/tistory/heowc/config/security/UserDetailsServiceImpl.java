package com.tistory.heowc.config.security;

import com.tistory.heowc.domain.Member;
import com.tistory.heowc.repository.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired MemberRepository memberRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Member member = memberRepository.findOne(username);

        if(member == null) {
            throw new UsernameNotFoundException(username + "is not found");
        }
        return new User(username, member.getPassword(), AuthorityUtils.createAuthorityList("USER"));
    }
}

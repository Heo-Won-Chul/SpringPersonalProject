package com.tistory.heowc.repository;

import com.tistory.heowc.domain.Notice;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NoticeRepository extends PagingAndSortingRepository<Notice, Long> {

    Page<Notice> findByTitleContaining(String title, Pageable pageable);
    Page<Notice> findByContentContaining(String content, Pageable pageable);
}

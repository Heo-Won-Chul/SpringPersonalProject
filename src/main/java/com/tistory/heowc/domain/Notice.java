package com.tistory.heowc.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;
import org.hibernate.validator.constraints.NotEmpty;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "NOTICE")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Notice implements Serializable {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "NOTICE_IDX")
    private Long idx;

    @NotEmpty
    private String title;

    @NotEmpty
    private String content;

    private LocalDateTime createDateTime;

    private LocalDateTime modifyDateTime;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "EMAIL")
    private Member member;

    public Notice() {}

    public Notice(String title, String content) {
        this.title = title;
        this.content = content;
    }
}

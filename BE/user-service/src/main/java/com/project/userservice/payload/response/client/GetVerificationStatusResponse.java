package com.project.userservice.payload.response.client;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class GetVerificationStatusResponse {
    private String userId;
    private String userStatus;
    private boolean phoneVerified;
    private boolean emailVerified;
}

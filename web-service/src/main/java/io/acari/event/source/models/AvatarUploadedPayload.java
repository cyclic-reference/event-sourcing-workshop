package io.acari.event.source.models;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class AvatarUploadedPayload implements Identifiable {
    private String identifier;
}

type Scalars = {
  readonly ID: string;
  readonly Boolean: boolean;
  readonly String: string;
  readonly Int: number;
  readonly Float: number;
  readonly JSON: import('@keystone-next/types').JSONValue;
};

export type UserWhereInput = {
  readonly AND?: ReadonlyArray<UserWhereInput | null> | null;
  readonly OR?: ReadonlyArray<UserWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly name?: Scalars['String'] | null;
  readonly name_not?: Scalars['String'] | null;
  readonly name_contains?: Scalars['String'] | null;
  readonly name_not_contains?: Scalars['String'] | null;
  readonly name_starts_with?: Scalars['String'] | null;
  readonly name_not_starts_with?: Scalars['String'] | null;
  readonly name_ends_with?: Scalars['String'] | null;
  readonly name_not_ends_with?: Scalars['String'] | null;
  readonly name_i?: Scalars['String'] | null;
  readonly name_not_i?: Scalars['String'] | null;
  readonly name_contains_i?: Scalars['String'] | null;
  readonly name_not_contains_i?: Scalars['String'] | null;
  readonly name_starts_with_i?: Scalars['String'] | null;
  readonly name_not_starts_with_i?: Scalars['String'] | null;
  readonly name_ends_with_i?: Scalars['String'] | null;
  readonly name_not_ends_with_i?: Scalars['String'] | null;
  readonly name_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly name_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly email?: Scalars['String'] | null;
  readonly email_not?: Scalars['String'] | null;
  readonly email_contains?: Scalars['String'] | null;
  readonly email_not_contains?: Scalars['String'] | null;
  readonly email_starts_with?: Scalars['String'] | null;
  readonly email_not_starts_with?: Scalars['String'] | null;
  readonly email_ends_with?: Scalars['String'] | null;
  readonly email_not_ends_with?: Scalars['String'] | null;
  readonly email_i?: Scalars['String'] | null;
  readonly email_not_i?: Scalars['String'] | null;
  readonly email_contains_i?: Scalars['String'] | null;
  readonly email_not_contains_i?: Scalars['String'] | null;
  readonly email_starts_with_i?: Scalars['String'] | null;
  readonly email_not_starts_with_i?: Scalars['String'] | null;
  readonly email_ends_with_i?: Scalars['String'] | null;
  readonly email_not_ends_with_i?: Scalars['String'] | null;
  readonly email_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly email_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly password_is_set?: Scalars['Boolean'] | null;
  readonly passwordResetToken_is_set?: Scalars['Boolean'] | null;
  readonly passwordResetIssuedAt?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_not?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_lt?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_lte?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_gt?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_gte?: Scalars['String'] | null;
  readonly passwordResetIssuedAt_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly passwordResetIssuedAt_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly passwordResetRedeemedAt?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_not?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_lt?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_lte?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_gt?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_gte?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly passwordResetRedeemedAt_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly magicAuthToken_is_set?: Scalars['Boolean'] | null;
  readonly magicAuthIssuedAt?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_not?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_lt?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_lte?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_gt?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_gte?: Scalars['String'] | null;
  readonly magicAuthIssuedAt_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly magicAuthIssuedAt_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly magicAuthRedeemedAt?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_not?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_lt?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_lte?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_gt?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_gte?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly magicAuthRedeemedAt_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
};

export type UserWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortUsersBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'email_ASC'
  | 'email_DESC'
  | 'passwordResetIssuedAt_ASC'
  | 'passwordResetIssuedAt_DESC'
  | 'passwordResetRedeemedAt_ASC'
  | 'passwordResetRedeemedAt_DESC'
  | 'magicAuthIssuedAt_ASC'
  | 'magicAuthIssuedAt_DESC'
  | 'magicAuthRedeemedAt_ASC'
  | 'magicAuthRedeemedAt_DESC';

export type UserUpdateInput = {
  readonly name?: Scalars['String'] | null;
  readonly email?: Scalars['String'] | null;
  readonly password?: Scalars['String'] | null;
  readonly passwordResetToken?: Scalars['String'] | null;
  readonly passwordResetIssuedAt?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt?: Scalars['String'] | null;
  readonly magicAuthToken?: Scalars['String'] | null;
  readonly magicAuthIssuedAt?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt?: Scalars['String'] | null;
};

export type UsersUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: UserUpdateInput | null;
};

export type UserCreateInput = {
  readonly name?: Scalars['String'] | null;
  readonly email?: Scalars['String'] | null;
  readonly password?: Scalars['String'] | null;
  readonly passwordResetToken?: Scalars['String'] | null;
  readonly passwordResetIssuedAt?: Scalars['String'] | null;
  readonly passwordResetRedeemedAt?: Scalars['String'] | null;
  readonly magicAuthToken?: Scalars['String'] | null;
  readonly magicAuthIssuedAt?: Scalars['String'] | null;
  readonly magicAuthRedeemedAt?: Scalars['String'] | null;
};

export type UsersCreateInput = {
  readonly data?: UserCreateInput | null;
};

export type PlayerImageRelateToOneInput = {
  readonly create?: PlayerImageCreateInput | null;
  readonly connect?: PlayerImageWhereUniqueInput | null;
  readonly disconnect?: PlayerImageWhereUniqueInput | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type StatRelateToOneInput = {
  readonly create?: StatCreateInput | null;
  readonly connect?: StatWhereUniqueInput | null;
  readonly disconnect?: StatWhereUniqueInput | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type PlayerWhereInput = {
  readonly AND?: ReadonlyArray<PlayerWhereInput | null> | null;
  readonly OR?: ReadonlyArray<PlayerWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly player_id?: Scalars['Int'] | null;
  readonly player_id_not?: Scalars['Int'] | null;
  readonly player_id_lt?: Scalars['Int'] | null;
  readonly player_id_lte?: Scalars['Int'] | null;
  readonly player_id_gt?: Scalars['Int'] | null;
  readonly player_id_gte?: Scalars['Int'] | null;
  readonly player_id_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly player_id_not_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly player_name?: Scalars['String'] | null;
  readonly player_name_not?: Scalars['String'] | null;
  readonly player_name_contains?: Scalars['String'] | null;
  readonly player_name_not_contains?: Scalars['String'] | null;
  readonly player_name_starts_with?: Scalars['String'] | null;
  readonly player_name_not_starts_with?: Scalars['String'] | null;
  readonly player_name_ends_with?: Scalars['String'] | null;
  readonly player_name_not_ends_with?: Scalars['String'] | null;
  readonly player_name_i?: Scalars['String'] | null;
  readonly player_name_not_i?: Scalars['String'] | null;
  readonly player_name_contains_i?: Scalars['String'] | null;
  readonly player_name_not_contains_i?: Scalars['String'] | null;
  readonly player_name_starts_with_i?: Scalars['String'] | null;
  readonly player_name_not_starts_with_i?: Scalars['String'] | null;
  readonly player_name_ends_with_i?: Scalars['String'] | null;
  readonly player_name_not_ends_with_i?: Scalars['String'] | null;
  readonly player_name_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly player_name_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly player_known_name?: Scalars['String'] | null;
  readonly player_known_name_not?: Scalars['String'] | null;
  readonly player_known_name_contains?: Scalars['String'] | null;
  readonly player_known_name_not_contains?: Scalars['String'] | null;
  readonly player_known_name_starts_with?: Scalars['String'] | null;
  readonly player_known_name_not_starts_with?: Scalars['String'] | null;
  readonly player_known_name_ends_with?: Scalars['String'] | null;
  readonly player_known_name_not_ends_with?: Scalars['String'] | null;
  readonly player_known_name_i?: Scalars['String'] | null;
  readonly player_known_name_not_i?: Scalars['String'] | null;
  readonly player_known_name_contains_i?: Scalars['String'] | null;
  readonly player_known_name_not_contains_i?: Scalars['String'] | null;
  readonly player_known_name_starts_with_i?: Scalars['String'] | null;
  readonly player_known_name_not_starts_with_i?: Scalars['String'] | null;
  readonly player_known_name_ends_with_i?: Scalars['String'] | null;
  readonly player_known_name_not_ends_with_i?: Scalars['String'] | null;
  readonly player_known_name_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly player_known_name_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly player_birth_date?: Scalars['String'] | null;
  readonly player_birth_date_not?: Scalars['String'] | null;
  readonly player_birth_date_contains?: Scalars['String'] | null;
  readonly player_birth_date_not_contains?: Scalars['String'] | null;
  readonly player_birth_date_starts_with?: Scalars['String'] | null;
  readonly player_birth_date_not_starts_with?: Scalars['String'] | null;
  readonly player_birth_date_ends_with?: Scalars['String'] | null;
  readonly player_birth_date_not_ends_with?: Scalars['String'] | null;
  readonly player_birth_date_i?: Scalars['String'] | null;
  readonly player_birth_date_not_i?: Scalars['String'] | null;
  readonly player_birth_date_contains_i?: Scalars['String'] | null;
  readonly player_birth_date_not_contains_i?: Scalars['String'] | null;
  readonly player_birth_date_starts_with_i?: Scalars['String'] | null;
  readonly player_birth_date_not_starts_with_i?: Scalars['String'] | null;
  readonly player_birth_date_ends_with_i?: Scalars['String'] | null;
  readonly player_birth_date_not_ends_with_i?: Scalars['String'] | null;
  readonly player_birth_date_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly player_birth_date_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly country_id?: Scalars['Int'] | null;
  readonly country_id_not?: Scalars['Int'] | null;
  readonly country_id_lt?: Scalars['Int'] | null;
  readonly country_id_lte?: Scalars['Int'] | null;
  readonly country_id_gt?: Scalars['Int'] | null;
  readonly country_id_gte?: Scalars['Int'] | null;
  readonly country_id_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly country_id_not_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly country_name?: Scalars['String'] | null;
  readonly country_name_not?: Scalars['String'] | null;
  readonly country_name_contains?: Scalars['String'] | null;
  readonly country_name_not_contains?: Scalars['String'] | null;
  readonly country_name_starts_with?: Scalars['String'] | null;
  readonly country_name_not_starts_with?: Scalars['String'] | null;
  readonly country_name_ends_with?: Scalars['String'] | null;
  readonly country_name_not_ends_with?: Scalars['String'] | null;
  readonly country_name_i?: Scalars['String'] | null;
  readonly country_name_not_i?: Scalars['String'] | null;
  readonly country_name_contains_i?: Scalars['String'] | null;
  readonly country_name_not_contains_i?: Scalars['String'] | null;
  readonly country_name_starts_with_i?: Scalars['String'] | null;
  readonly country_name_not_starts_with_i?: Scalars['String'] | null;
  readonly country_name_ends_with_i?: Scalars['String'] | null;
  readonly country_name_not_ends_with_i?: Scalars['String'] | null;
  readonly country_name_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly country_name_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly country_code?: Scalars['String'] | null;
  readonly country_code_not?: Scalars['String'] | null;
  readonly country_code_contains?: Scalars['String'] | null;
  readonly country_code_not_contains?: Scalars['String'] | null;
  readonly country_code_starts_with?: Scalars['String'] | null;
  readonly country_code_not_starts_with?: Scalars['String'] | null;
  readonly country_code_ends_with?: Scalars['String'] | null;
  readonly country_code_not_ends_with?: Scalars['String'] | null;
  readonly country_code_i?: Scalars['String'] | null;
  readonly country_code_not_i?: Scalars['String'] | null;
  readonly country_code_contains_i?: Scalars['String'] | null;
  readonly country_code_not_contains_i?: Scalars['String'] | null;
  readonly country_code_starts_with_i?: Scalars['String'] | null;
  readonly country_code_not_starts_with_i?: Scalars['String'] | null;
  readonly country_code_ends_with_i?: Scalars['String'] | null;
  readonly country_code_not_ends_with_i?: Scalars['String'] | null;
  readonly country_code_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly country_code_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly photo?: PlayerImageWhereInput | null;
  readonly photo_is_null?: Scalars['Boolean'] | null;
  readonly stat?: StatWhereInput | null;
  readonly stat_is_null?: Scalars['Boolean'] | null;
  readonly status?: Scalars['String'] | null;
  readonly status_not?: Scalars['String'] | null;
  readonly status_contains?: Scalars['String'] | null;
  readonly status_not_contains?: Scalars['String'] | null;
  readonly status_starts_with?: Scalars['String'] | null;
  readonly status_not_starts_with?: Scalars['String'] | null;
  readonly status_ends_with?: Scalars['String'] | null;
  readonly status_not_ends_with?: Scalars['String'] | null;
  readonly status_i?: Scalars['String'] | null;
  readonly status_not_i?: Scalars['String'] | null;
  readonly status_contains_i?: Scalars['String'] | null;
  readonly status_not_contains_i?: Scalars['String'] | null;
  readonly status_starts_with_i?: Scalars['String'] | null;
  readonly status_not_starts_with_i?: Scalars['String'] | null;
  readonly status_ends_with_i?: Scalars['String'] | null;
  readonly status_not_ends_with_i?: Scalars['String'] | null;
  readonly status_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly status_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
};

export type PlayerWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortPlayersBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'player_id_ASC'
  | 'player_id_DESC'
  | 'player_name_ASC'
  | 'player_name_DESC'
  | 'player_known_name_ASC'
  | 'player_known_name_DESC'
  | 'player_birth_date_ASC'
  | 'player_birth_date_DESC'
  | 'country_id_ASC'
  | 'country_id_DESC'
  | 'country_name_ASC'
  | 'country_name_DESC'
  | 'country_code_ASC'
  | 'country_code_DESC'
  | 'photo_ASC'
  | 'photo_DESC'
  | 'stat_ASC'
  | 'stat_DESC'
  | 'status_ASC'
  | 'status_DESC';

export type PlayerUpdateInput = {
  readonly player_id?: Scalars['Int'] | null;
  readonly player_name?: Scalars['String'] | null;
  readonly player_known_name?: Scalars['String'] | null;
  readonly player_birth_date?: Scalars['String'] | null;
  readonly country_id?: Scalars['Int'] | null;
  readonly country_name?: Scalars['String'] | null;
  readonly country_code?: Scalars['String'] | null;
  readonly photo?: PlayerImageRelateToOneInput | null;
  readonly stat?: StatRelateToOneInput | null;
  readonly status?: Scalars['String'] | null;
};

export type PlayersUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: PlayerUpdateInput | null;
};

export type PlayerCreateInput = {
  readonly player_id?: Scalars['Int'] | null;
  readonly player_name?: Scalars['String'] | null;
  readonly player_known_name?: Scalars['String'] | null;
  readonly player_birth_date?: Scalars['String'] | null;
  readonly country_id?: Scalars['Int'] | null;
  readonly country_name?: Scalars['String'] | null;
  readonly country_code?: Scalars['String'] | null;
  readonly photo?: PlayerImageRelateToOneInput | null;
  readonly stat?: StatRelateToOneInput | null;
  readonly status?: Scalars['String'] | null;
};

export type PlayersCreateInput = {
  readonly data?: PlayerCreateInput | null;
};

export type CloudinaryImageFormat = {
  readonly prettyName?: Scalars['String'] | null;
  readonly width?: Scalars['String'] | null;
  readonly height?: Scalars['String'] | null;
  readonly crop?: Scalars['String'] | null;
  readonly aspect_ratio?: Scalars['String'] | null;
  readonly gravity?: Scalars['String'] | null;
  readonly zoom?: Scalars['String'] | null;
  readonly x?: Scalars['String'] | null;
  readonly y?: Scalars['String'] | null;
  readonly format?: Scalars['String'] | null;
  readonly fetch_format?: Scalars['String'] | null;
  readonly quality?: Scalars['String'] | null;
  readonly radius?: Scalars['String'] | null;
  readonly angle?: Scalars['String'] | null;
  readonly effect?: Scalars['String'] | null;
  readonly opacity?: Scalars['String'] | null;
  readonly border?: Scalars['String'] | null;
  readonly background?: Scalars['String'] | null;
  readonly overlay?: Scalars['String'] | null;
  readonly underlay?: Scalars['String'] | null;
  readonly default_image?: Scalars['String'] | null;
  readonly delay?: Scalars['String'] | null;
  readonly color?: Scalars['String'] | null;
  readonly color_space?: Scalars['String'] | null;
  readonly dpr?: Scalars['String'] | null;
  readonly page?: Scalars['String'] | null;
  readonly density?: Scalars['String'] | null;
  readonly flags?: Scalars['String'] | null;
  readonly transformation?: Scalars['String'] | null;
};

export type PlayerRelateToOneInput = {
  readonly create?: PlayerCreateInput | null;
  readonly connect?: PlayerWhereUniqueInput | null;
  readonly disconnect?: PlayerWhereUniqueInput | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type PlayerImageWhereInput = {
  readonly AND?: ReadonlyArray<PlayerImageWhereInput | null> | null;
  readonly OR?: ReadonlyArray<PlayerImageWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly image?: Scalars['String'] | null;
  readonly image_not?: Scalars['String'] | null;
  readonly image_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly image_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly altText?: Scalars['String'] | null;
  readonly altText_not?: Scalars['String'] | null;
  readonly altText_contains?: Scalars['String'] | null;
  readonly altText_not_contains?: Scalars['String'] | null;
  readonly altText_starts_with?: Scalars['String'] | null;
  readonly altText_not_starts_with?: Scalars['String'] | null;
  readonly altText_ends_with?: Scalars['String'] | null;
  readonly altText_not_ends_with?: Scalars['String'] | null;
  readonly altText_i?: Scalars['String'] | null;
  readonly altText_not_i?: Scalars['String'] | null;
  readonly altText_contains_i?: Scalars['String'] | null;
  readonly altText_not_contains_i?: Scalars['String'] | null;
  readonly altText_starts_with_i?: Scalars['String'] | null;
  readonly altText_not_starts_with_i?: Scalars['String'] | null;
  readonly altText_ends_with_i?: Scalars['String'] | null;
  readonly altText_not_ends_with_i?: Scalars['String'] | null;
  readonly altText_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly altText_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly player?: PlayerWhereInput | null;
  readonly player_is_null?: Scalars['Boolean'] | null;
};

export type PlayerImageWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortPlayerImagesBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'altText_ASC'
  | 'altText_DESC'
  | 'player_ASC'
  | 'player_DESC';

export type PlayerImageUpdateInput = {
  readonly image?: any | null;
  readonly altText?: Scalars['String'] | null;
  readonly player?: PlayerRelateToOneInput | null;
};

export type PlayerImagesUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: PlayerImageUpdateInput | null;
};

export type PlayerImageCreateInput = {
  readonly image?: any | null;
  readonly altText?: Scalars['String'] | null;
  readonly player?: PlayerRelateToOneInput | null;
};

export type PlayerImagesCreateInput = {
  readonly data?: PlayerImageCreateInput | null;
};

export type TeamWhereInput = {
  readonly AND?: ReadonlyArray<TeamWhereInput | null> | null;
  readonly OR?: ReadonlyArray<TeamWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly team_id?: Scalars['Int'] | null;
  readonly team_id_not?: Scalars['Int'] | null;
  readonly team_id_lt?: Scalars['Int'] | null;
  readonly team_id_lte?: Scalars['Int'] | null;
  readonly team_id_gt?: Scalars['Int'] | null;
  readonly team_id_gte?: Scalars['Int'] | null;
  readonly team_id_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly team_id_not_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly team_name?: Scalars['String'] | null;
  readonly team_name_not?: Scalars['String'] | null;
  readonly team_name_contains?: Scalars['String'] | null;
  readonly team_name_not_contains?: Scalars['String'] | null;
  readonly team_name_starts_with?: Scalars['String'] | null;
  readonly team_name_not_starts_with?: Scalars['String'] | null;
  readonly team_name_ends_with?: Scalars['String'] | null;
  readonly team_name_not_ends_with?: Scalars['String'] | null;
  readonly team_name_i?: Scalars['String'] | null;
  readonly team_name_not_i?: Scalars['String'] | null;
  readonly team_name_contains_i?: Scalars['String'] | null;
  readonly team_name_not_contains_i?: Scalars['String'] | null;
  readonly team_name_starts_with_i?: Scalars['String'] | null;
  readonly team_name_not_starts_with_i?: Scalars['String'] | null;
  readonly team_name_ends_with_i?: Scalars['String'] | null;
  readonly team_name_not_ends_with_i?: Scalars['String'] | null;
  readonly team_name_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly team_name_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly team_first_color?: Scalars['String'] | null;
  readonly team_first_color_not?: Scalars['String'] | null;
  readonly team_first_color_contains?: Scalars['String'] | null;
  readonly team_first_color_not_contains?: Scalars['String'] | null;
  readonly team_first_color_starts_with?: Scalars['String'] | null;
  readonly team_first_color_not_starts_with?: Scalars['String'] | null;
  readonly team_first_color_ends_with?: Scalars['String'] | null;
  readonly team_first_color_not_ends_with?: Scalars['String'] | null;
  readonly team_first_color_i?: Scalars['String'] | null;
  readonly team_first_color_not_i?: Scalars['String'] | null;
  readonly team_first_color_contains_i?: Scalars['String'] | null;
  readonly team_first_color_not_contains_i?: Scalars['String'] | null;
  readonly team_first_color_starts_with_i?: Scalars['String'] | null;
  readonly team_first_color_not_starts_with_i?: Scalars['String'] | null;
  readonly team_first_color_ends_with_i?: Scalars['String'] | null;
  readonly team_first_color_not_ends_with_i?: Scalars['String'] | null;
  readonly team_first_color_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly team_first_color_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly stat?: StatWhereInput | null;
  readonly stat_is_null?: Scalars['Boolean'] | null;
};

export type TeamWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortTeamsBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'team_id_ASC'
  | 'team_id_DESC'
  | 'team_name_ASC'
  | 'team_name_DESC'
  | 'team_first_color_ASC'
  | 'team_first_color_DESC'
  | 'stat_ASC'
  | 'stat_DESC';

export type TeamUpdateInput = {
  readonly team_id?: Scalars['Int'] | null;
  readonly team_name?: Scalars['String'] | null;
  readonly team_first_color?: Scalars['String'] | null;
  readonly stat?: StatRelateToOneInput | null;
};

export type TeamsUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: TeamUpdateInput | null;
};

export type TeamCreateInput = {
  readonly team_id?: Scalars['Int'] | null;
  readonly team_name?: Scalars['String'] | null;
  readonly team_first_color?: Scalars['String'] | null;
  readonly stat?: StatRelateToOneInput | null;
};

export type TeamsCreateInput = {
  readonly data?: TeamCreateInput | null;
};

export type TeamRelateToOneInput = {
  readonly create?: TeamCreateInput | null;
  readonly connect?: TeamWhereUniqueInput | null;
  readonly disconnect?: TeamWhereUniqueInput | null;
  readonly disconnectAll?: Scalars['Boolean'] | null;
};

export type StatWhereInput = {
  readonly AND?: ReadonlyArray<StatWhereInput | null> | null;
  readonly OR?: ReadonlyArray<StatWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly match_id?: Scalars['Int'] | null;
  readonly match_id_not?: Scalars['Int'] | null;
  readonly match_id_lt?: Scalars['Int'] | null;
  readonly match_id_lte?: Scalars['Int'] | null;
  readonly match_id_gt?: Scalars['Int'] | null;
  readonly match_id_gte?: Scalars['Int'] | null;
  readonly match_id_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly match_id_not_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly team_id?: Scalars['Int'] | null;
  readonly team_id_not?: Scalars['Int'] | null;
  readonly team_id_lt?: Scalars['Int'] | null;
  readonly team_id_lte?: Scalars['Int'] | null;
  readonly team_id_gt?: Scalars['Int'] | null;
  readonly team_id_gte?: Scalars['Int'] | null;
  readonly team_id_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly team_id_not_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly player_id?: Scalars['Int'] | null;
  readonly player_id_not?: Scalars['Int'] | null;
  readonly player_id_lt?: Scalars['Int'] | null;
  readonly player_id_lte?: Scalars['Int'] | null;
  readonly player_id_gt?: Scalars['Int'] | null;
  readonly player_id_gte?: Scalars['Int'] | null;
  readonly player_id_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly player_id_not_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly minutes_played?: Scalars['String'] | null;
  readonly minutes_played_not?: Scalars['String'] | null;
  readonly minutes_played_contains?: Scalars['String'] | null;
  readonly minutes_played_not_contains?: Scalars['String'] | null;
  readonly minutes_played_starts_with?: Scalars['String'] | null;
  readonly minutes_played_not_starts_with?: Scalars['String'] | null;
  readonly minutes_played_ends_with?: Scalars['String'] | null;
  readonly minutes_played_not_ends_with?: Scalars['String'] | null;
  readonly minutes_played_i?: Scalars['String'] | null;
  readonly minutes_played_not_i?: Scalars['String'] | null;
  readonly minutes_played_contains_i?: Scalars['String'] | null;
  readonly minutes_played_not_contains_i?: Scalars['String'] | null;
  readonly minutes_played_starts_with_i?: Scalars['String'] | null;
  readonly minutes_played_not_starts_with_i?: Scalars['String'] | null;
  readonly minutes_played_ends_with_i?: Scalars['String'] | null;
  readonly minutes_played_not_ends_with_i?: Scalars['String'] | null;
  readonly minutes_played_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly minutes_played_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly team_possession_percentage?: Scalars['String'] | null;
  readonly team_possession_percentage_not?: Scalars['String'] | null;
  readonly team_possession_percentage_contains?: Scalars['String'] | null;
  readonly team_possession_percentage_not_contains?: Scalars['String'] | null;
  readonly team_possession_percentage_starts_with?: Scalars['String'] | null;
  readonly team_possession_percentage_not_starts_with?:
    | Scalars['String']
    | null;
  readonly team_possession_percentage_ends_with?: Scalars['String'] | null;
  readonly team_possession_percentage_not_ends_with?: Scalars['String'] | null;
  readonly team_possession_percentage_i?: Scalars['String'] | null;
  readonly team_possession_percentage_not_i?: Scalars['String'] | null;
  readonly team_possession_percentage_contains_i?: Scalars['String'] | null;
  readonly team_possession_percentage_not_contains_i?: Scalars['String'] | null;
  readonly team_possession_percentage_starts_with_i?: Scalars['String'] | null;
  readonly team_possession_percentage_not_starts_with_i?:
    | Scalars['String']
    | null;
  readonly team_possession_percentage_ends_with_i?: Scalars['String'] | null;
  readonly team_possession_percentage_not_ends_with_i?:
    | Scalars['String']
    | null;
  readonly team_possession_percentage_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly team_possession_percentage_not_in?: ReadonlyArray<
    Scalars['String'] | null
  > | null;
  readonly xg?: Scalars['Int'] | null;
  readonly xg_not?: Scalars['Int'] | null;
  readonly xg_lt?: Scalars['Int'] | null;
  readonly xg_lte?: Scalars['Int'] | null;
  readonly xg_gt?: Scalars['Int'] | null;
  readonly xg_gte?: Scalars['Int'] | null;
  readonly xg_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly xg_not_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly shots?: Scalars['Int'] | null;
  readonly shots_not?: Scalars['Int'] | null;
  readonly shots_lt?: Scalars['Int'] | null;
  readonly shots_lte?: Scalars['Int'] | null;
  readonly shots_gt?: Scalars['Int'] | null;
  readonly shots_gte?: Scalars['Int'] | null;
  readonly shots_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly shots_not_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly goals?: Scalars['Int'] | null;
  readonly goals_not?: Scalars['Int'] | null;
  readonly goals_lt?: Scalars['Int'] | null;
  readonly goals_lte?: Scalars['Int'] | null;
  readonly goals_gt?: Scalars['Int'] | null;
  readonly goals_gte?: Scalars['Int'] | null;
  readonly goals_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly goals_not_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly tackles?: Scalars['Int'] | null;
  readonly tackles_not?: Scalars['Int'] | null;
  readonly tackles_lt?: Scalars['Int'] | null;
  readonly tackles_lte?: Scalars['Int'] | null;
  readonly tackles_gt?: Scalars['Int'] | null;
  readonly tackles_gte?: Scalars['Int'] | null;
  readonly tackles_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly tackles_not_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly interceptions?: Scalars['Int'] | null;
  readonly interceptions_not?: Scalars['Int'] | null;
  readonly interceptions_lt?: Scalars['Int'] | null;
  readonly interceptions_lte?: Scalars['Int'] | null;
  readonly interceptions_gt?: Scalars['Int'] | null;
  readonly interceptions_gte?: Scalars['Int'] | null;
  readonly interceptions_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly interceptions_not_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly pressures?: Scalars['Int'] | null;
  readonly pressures_not?: Scalars['Int'] | null;
  readonly pressures_lt?: Scalars['Int'] | null;
  readonly pressures_lte?: Scalars['Int'] | null;
  readonly pressures_gt?: Scalars['Int'] | null;
  readonly pressures_gte?: Scalars['Int'] | null;
  readonly pressures_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly pressures_not_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly passes?: Scalars['Int'] | null;
  readonly passes_not?: Scalars['Int'] | null;
  readonly passes_lt?: Scalars['Int'] | null;
  readonly passes_lte?: Scalars['Int'] | null;
  readonly passes_gt?: Scalars['Int'] | null;
  readonly passes_gte?: Scalars['Int'] | null;
  readonly passes_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly passes_not_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly completed_passes?: Scalars['Int'] | null;
  readonly completed_passes_not?: Scalars['Int'] | null;
  readonly completed_passes_lt?: Scalars['Int'] | null;
  readonly completed_passes_lte?: Scalars['Int'] | null;
  readonly completed_passes_gt?: Scalars['Int'] | null;
  readonly completed_passes_gte?: Scalars['Int'] | null;
  readonly completed_passes_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly completed_passes_not_in?: ReadonlyArray<
    Scalars['Int'] | null
  > | null;
  readonly left_foot_passes?: Scalars['Int'] | null;
  readonly left_foot_passes_not?: Scalars['Int'] | null;
  readonly left_foot_passes_lt?: Scalars['Int'] | null;
  readonly left_foot_passes_lte?: Scalars['Int'] | null;
  readonly left_foot_passes_gt?: Scalars['Int'] | null;
  readonly left_foot_passes_gte?: Scalars['Int'] | null;
  readonly left_foot_passes_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly left_foot_passes_not_in?: ReadonlyArray<
    Scalars['Int'] | null
  > | null;
  readonly right_foot_passes?: Scalars['Int'] | null;
  readonly right_foot_passes_not?: Scalars['Int'] | null;
  readonly right_foot_passes_lt?: Scalars['Int'] | null;
  readonly right_foot_passes_lte?: Scalars['Int'] | null;
  readonly right_foot_passes_gt?: Scalars['Int'] | null;
  readonly right_foot_passes_gte?: Scalars['Int'] | null;
  readonly right_foot_passes_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly right_foot_passes_not_in?: ReadonlyArray<
    Scalars['Int'] | null
  > | null;
  readonly player_shots_faced?: Scalars['Int'] | null;
  readonly player_shots_faced_not?: Scalars['Int'] | null;
  readonly player_shots_faced_lt?: Scalars['Int'] | null;
  readonly player_shots_faced_lte?: Scalars['Int'] | null;
  readonly player_shots_faced_gt?: Scalars['Int'] | null;
  readonly player_shots_faced_gte?: Scalars['Int'] | null;
  readonly player_shots_faced_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly player_shots_faced_not_in?: ReadonlyArray<
    Scalars['Int'] | null
  > | null;
  readonly player?: PlayerWhereInput | null;
  readonly player_is_null?: Scalars['Boolean'] | null;
  readonly team?: TeamWhereInput | null;
  readonly team_is_null?: Scalars['Boolean'] | null;
};

export type StatWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortStatsBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'match_id_ASC'
  | 'match_id_DESC'
  | 'team_id_ASC'
  | 'team_id_DESC'
  | 'player_id_ASC'
  | 'player_id_DESC'
  | 'minutes_played_ASC'
  | 'minutes_played_DESC'
  | 'team_possession_percentage_ASC'
  | 'team_possession_percentage_DESC'
  | 'xg_ASC'
  | 'xg_DESC'
  | 'shots_ASC'
  | 'shots_DESC'
  | 'goals_ASC'
  | 'goals_DESC'
  | 'tackles_ASC'
  | 'tackles_DESC'
  | 'interceptions_ASC'
  | 'interceptions_DESC'
  | 'pressures_ASC'
  | 'pressures_DESC'
  | 'passes_ASC'
  | 'passes_DESC'
  | 'completed_passes_ASC'
  | 'completed_passes_DESC'
  | 'left_foot_passes_ASC'
  | 'left_foot_passes_DESC'
  | 'right_foot_passes_ASC'
  | 'right_foot_passes_DESC'
  | 'player_shots_faced_ASC'
  | 'player_shots_faced_DESC'
  | 'player_ASC'
  | 'player_DESC'
  | 'team_ASC'
  | 'team_DESC';

export type StatUpdateInput = {
  readonly match_id?: Scalars['Int'] | null;
  readonly team_id?: Scalars['Int'] | null;
  readonly player_id?: Scalars['Int'] | null;
  readonly minutes_played?: Scalars['String'] | null;
  readonly team_possession_percentage?: Scalars['String'] | null;
  readonly xg?: Scalars['Int'] | null;
  readonly shots?: Scalars['Int'] | null;
  readonly goals?: Scalars['Int'] | null;
  readonly tackles?: Scalars['Int'] | null;
  readonly interceptions?: Scalars['Int'] | null;
  readonly pressures?: Scalars['Int'] | null;
  readonly passes?: Scalars['Int'] | null;
  readonly completed_passes?: Scalars['Int'] | null;
  readonly left_foot_passes?: Scalars['Int'] | null;
  readonly right_foot_passes?: Scalars['Int'] | null;
  readonly player_shots_faced?: Scalars['Int'] | null;
  readonly player?: PlayerRelateToOneInput | null;
  readonly team?: TeamRelateToOneInput | null;
};

export type StatsUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: StatUpdateInput | null;
};

export type StatCreateInput = {
  readonly match_id?: Scalars['Int'] | null;
  readonly team_id?: Scalars['Int'] | null;
  readonly player_id?: Scalars['Int'] | null;
  readonly minutes_played?: Scalars['String'] | null;
  readonly team_possession_percentage?: Scalars['String'] | null;
  readonly xg?: Scalars['Int'] | null;
  readonly shots?: Scalars['Int'] | null;
  readonly goals?: Scalars['Int'] | null;
  readonly tackles?: Scalars['Int'] | null;
  readonly interceptions?: Scalars['Int'] | null;
  readonly pressures?: Scalars['Int'] | null;
  readonly passes?: Scalars['Int'] | null;
  readonly completed_passes?: Scalars['Int'] | null;
  readonly left_foot_passes?: Scalars['Int'] | null;
  readonly right_foot_passes?: Scalars['Int'] | null;
  readonly player_shots_faced?: Scalars['Int'] | null;
  readonly player?: PlayerRelateToOneInput | null;
  readonly team?: TeamRelateToOneInput | null;
};

export type StatsCreateInput = {
  readonly data?: StatCreateInput | null;
};

export type MatchWhereInput = {
  readonly AND?: ReadonlyArray<MatchWhereInput | null> | null;
  readonly OR?: ReadonlyArray<MatchWhereInput | null> | null;
  readonly id?: Scalars['ID'] | null;
  readonly id_not?: Scalars['ID'] | null;
  readonly id_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly id_not_in?: ReadonlyArray<Scalars['ID'] | null> | null;
  readonly match_id?: Scalars['Int'] | null;
  readonly match_id_not?: Scalars['Int'] | null;
  readonly match_id_lt?: Scalars['Int'] | null;
  readonly match_id_lte?: Scalars['Int'] | null;
  readonly match_id_gt?: Scalars['Int'] | null;
  readonly match_id_gte?: Scalars['Int'] | null;
  readonly match_id_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly match_id_not_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly match_date?: Scalars['String'] | null;
  readonly match_date_not?: Scalars['String'] | null;
  readonly match_date_contains?: Scalars['String'] | null;
  readonly match_date_not_contains?: Scalars['String'] | null;
  readonly match_date_starts_with?: Scalars['String'] | null;
  readonly match_date_not_starts_with?: Scalars['String'] | null;
  readonly match_date_ends_with?: Scalars['String'] | null;
  readonly match_date_not_ends_with?: Scalars['String'] | null;
  readonly match_date_i?: Scalars['String'] | null;
  readonly match_date_not_i?: Scalars['String'] | null;
  readonly match_date_contains_i?: Scalars['String'] | null;
  readonly match_date_not_contains_i?: Scalars['String'] | null;
  readonly match_date_starts_with_i?: Scalars['String'] | null;
  readonly match_date_not_starts_with_i?: Scalars['String'] | null;
  readonly match_date_ends_with_i?: Scalars['String'] | null;
  readonly match_date_not_ends_with_i?: Scalars['String'] | null;
  readonly match_date_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly match_date_not_in?: ReadonlyArray<Scalars['String'] | null> | null;
  readonly match_home_team_id?: Scalars['Int'] | null;
  readonly match_home_team_id_not?: Scalars['Int'] | null;
  readonly match_home_team_id_lt?: Scalars['Int'] | null;
  readonly match_home_team_id_lte?: Scalars['Int'] | null;
  readonly match_home_team_id_gt?: Scalars['Int'] | null;
  readonly match_home_team_id_gte?: Scalars['Int'] | null;
  readonly match_home_team_id_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly match_home_team_id_not_in?: ReadonlyArray<
    Scalars['Int'] | null
  > | null;
  readonly match_away_team_id?: Scalars['Int'] | null;
  readonly match_away_team_id_not?: Scalars['Int'] | null;
  readonly match_away_team_id_lt?: Scalars['Int'] | null;
  readonly match_away_team_id_lte?: Scalars['Int'] | null;
  readonly match_away_team_id_gt?: Scalars['Int'] | null;
  readonly match_away_team_id_gte?: Scalars['Int'] | null;
  readonly match_away_team_id_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly match_away_team_id_not_in?: ReadonlyArray<
    Scalars['Int'] | null
  > | null;
  readonly match_home_score?: Scalars['Int'] | null;
  readonly match_home_score_not?: Scalars['Int'] | null;
  readonly match_home_score_lt?: Scalars['Int'] | null;
  readonly match_home_score_lte?: Scalars['Int'] | null;
  readonly match_home_score_gt?: Scalars['Int'] | null;
  readonly match_home_score_gte?: Scalars['Int'] | null;
  readonly match_home_score_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly match_home_score_not_in?: ReadonlyArray<
    Scalars['Int'] | null
  > | null;
  readonly match_away_score?: Scalars['Int'] | null;
  readonly match_away_score_not?: Scalars['Int'] | null;
  readonly match_away_score_lt?: Scalars['Int'] | null;
  readonly match_away_score_lte?: Scalars['Int'] | null;
  readonly match_away_score_gt?: Scalars['Int'] | null;
  readonly match_away_score_gte?: Scalars['Int'] | null;
  readonly match_away_score_in?: ReadonlyArray<Scalars['Int'] | null> | null;
  readonly match_away_score_not_in?: ReadonlyArray<
    Scalars['Int'] | null
  > | null;
  readonly match_home_penalty_score?: Scalars['Int'] | null;
  readonly match_home_penalty_score_not?: Scalars['Int'] | null;
  readonly match_home_penalty_score_lt?: Scalars['Int'] | null;
  readonly match_home_penalty_score_lte?: Scalars['Int'] | null;
  readonly match_home_penalty_score_gt?: Scalars['Int'] | null;
  readonly match_home_penalty_score_gte?: Scalars['Int'] | null;
  readonly match_home_penalty_score_in?: ReadonlyArray<
    Scalars['Int'] | null
  > | null;
  readonly match_home_penalty_score_not_in?: ReadonlyArray<
    Scalars['Int'] | null
  > | null;
  readonly match_away_penalty_score?: Scalars['Int'] | null;
  readonly match_away_penalty_score_not?: Scalars['Int'] | null;
  readonly match_away_penalty_score_lt?: Scalars['Int'] | null;
  readonly match_away_penalty_score_lte?: Scalars['Int'] | null;
  readonly match_away_penalty_score_gt?: Scalars['Int'] | null;
  readonly match_away_penalty_score_gte?: Scalars['Int'] | null;
  readonly match_away_penalty_score_in?: ReadonlyArray<
    Scalars['Int'] | null
  > | null;
  readonly match_away_penalty_score_not_in?: ReadonlyArray<
    Scalars['Int'] | null
  > | null;
};

export type MatchWhereUniqueInput = {
  readonly id: Scalars['ID'];
};

export type SortMatchesBy =
  | 'id_ASC'
  | 'id_DESC'
  | 'match_id_ASC'
  | 'match_id_DESC'
  | 'match_date_ASC'
  | 'match_date_DESC'
  | 'match_home_team_id_ASC'
  | 'match_home_team_id_DESC'
  | 'match_away_team_id_ASC'
  | 'match_away_team_id_DESC'
  | 'match_home_score_ASC'
  | 'match_home_score_DESC'
  | 'match_away_score_ASC'
  | 'match_away_score_DESC'
  | 'match_home_penalty_score_ASC'
  | 'match_home_penalty_score_DESC'
  | 'match_away_penalty_score_ASC'
  | 'match_away_penalty_score_DESC';

export type MatchUpdateInput = {
  readonly match_id?: Scalars['Int'] | null;
  readonly match_date?: Scalars['String'] | null;
  readonly match_home_team_id?: Scalars['Int'] | null;
  readonly match_away_team_id?: Scalars['Int'] | null;
  readonly match_home_score?: Scalars['Int'] | null;
  readonly match_away_score?: Scalars['Int'] | null;
  readonly match_home_penalty_score?: Scalars['Int'] | null;
  readonly match_away_penalty_score?: Scalars['Int'] | null;
};

export type MatchesUpdateInput = {
  readonly id: Scalars['ID'];
  readonly data?: MatchUpdateInput | null;
};

export type MatchCreateInput = {
  readonly match_id?: Scalars['Int'] | null;
  readonly match_date?: Scalars['String'] | null;
  readonly match_home_team_id?: Scalars['Int'] | null;
  readonly match_away_team_id?: Scalars['Int'] | null;
  readonly match_home_score?: Scalars['Int'] | null;
  readonly match_away_score?: Scalars['Int'] | null;
  readonly match_home_penalty_score?: Scalars['Int'] | null;
  readonly match_away_penalty_score?: Scalars['Int'] | null;
};

export type MatchesCreateInput = {
  readonly data?: MatchCreateInput | null;
};

export type _ksListsMetaInput = {
  readonly key?: Scalars['String'] | null;
  readonly auxiliary?: Scalars['Boolean'] | null;
};

export type _ListSchemaFieldsInput = {
  readonly type?: Scalars['String'] | null;
};

export type PasswordAuthErrorCode =
  | 'FAILURE'
  | 'IDENTITY_NOT_FOUND'
  | 'SECRET_NOT_SET'
  | 'MULTIPLE_IDENTITY_MATCHES'
  | 'SECRET_MISMATCH';

export type CreateInitialUserInput = {
  readonly name?: Scalars['String'] | null;
  readonly email?: Scalars['String'] | null;
  readonly password?: Scalars['String'] | null;
};

export type PasswordResetRequestErrorCode =
  | 'IDENTITY_NOT_FOUND'
  | 'MULTIPLE_IDENTITY_MATCHES';

export type PasswordResetRedemptionErrorCode =
  | 'FAILURE'
  | 'IDENTITY_NOT_FOUND'
  | 'MULTIPLE_IDENTITY_MATCHES'
  | 'TOKEN_NOT_SET'
  | 'TOKEN_MISMATCH'
  | 'TOKEN_EXPIRED'
  | 'TOKEN_REDEEMED';

export type KeystoneAdminUIFieldMetaCreateViewFieldMode = 'edit' | 'hidden';

export type KeystoneAdminUIFieldMetaListViewFieldMode = 'read' | 'hidden';

export type KeystoneAdminUIFieldMetaItemViewFieldMode =
  | 'edit'
  | 'read'
  | 'hidden';

export type KeystoneAdminUISortDirection = 'ASC' | 'DESC';

export type UserListTypeInfo = {
  key: 'User';
  fields:
    | 'id'
    | 'name'
    | 'email'
    | 'password'
    | 'passwordResetToken'
    | 'passwordResetIssuedAt'
    | 'passwordResetRedeemedAt'
    | 'magicAuthToken'
    | 'magicAuthIssuedAt'
    | 'magicAuthRedeemedAt';
  backing: {
    readonly id: string;
    readonly name?: string | null;
    readonly email?: string | null;
    readonly password?: string | null;
    readonly passwordResetToken?: string | null;
    readonly passwordResetIssuedAt?: Date | null;
    readonly passwordResetRedeemedAt?: Date | null;
    readonly magicAuthToken?: string | null;
    readonly magicAuthIssuedAt?: Date | null;
    readonly magicAuthRedeemedAt?: Date | null;
  };
  inputs: {
    where: UserWhereInput;
    create: UserCreateInput;
    update: UserUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: UserWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortUsersBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type UserListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    UserListTypeInfo,
    UserListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  UserListTypeInfo,
  UserListTypeInfo['fields']
>;

export type PlayerListTypeInfo = {
  key: 'Player';
  fields:
    | 'id'
    | 'player_id'
    | 'player_name'
    | 'player_known_name'
    | 'player_birth_date'
    | 'country_id'
    | 'country_name'
    | 'country_code'
    | 'photo'
    | 'stat'
    | 'status';
  backing: {
    readonly id: string;
    readonly player_id?: number | null;
    readonly player_name?: string | null;
    readonly player_known_name?: string | null;
    readonly player_birth_date?: string | null;
    readonly country_id?: number | null;
    readonly country_name?: string | null;
    readonly country_code?: string | null;
    readonly photo?: string | null;
    readonly stat?: string | null;
    readonly status?: string | null;
  };
  inputs: {
    where: PlayerWhereInput;
    create: PlayerCreateInput;
    update: PlayerUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: PlayerWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortPlayersBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type PlayerListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    PlayerListTypeInfo,
    PlayerListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  PlayerListTypeInfo,
  PlayerListTypeInfo['fields']
>;

export type PlayerImageListTypeInfo = {
  key: 'PlayerImage';
  fields: 'id' | 'image' | 'altText' | 'player';
  backing: {
    readonly id: string;
    readonly image?: any;
    readonly altText?: string | null;
    readonly player?: string | null;
  };
  inputs: {
    where: PlayerImageWhereInput;
    create: PlayerImageCreateInput;
    update: PlayerImageUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: PlayerImageWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortPlayerImagesBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type PlayerImageListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    PlayerImageListTypeInfo,
    PlayerImageListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  PlayerImageListTypeInfo,
  PlayerImageListTypeInfo['fields']
>;

export type TeamListTypeInfo = {
  key: 'Team';
  fields: 'id' | 'team_id' | 'team_name' | 'team_first_color' | 'stat';
  backing: {
    readonly id: string;
    readonly team_id?: number | null;
    readonly team_name?: string | null;
    readonly team_first_color?: string | null;
    readonly stat?: string | null;
  };
  inputs: {
    where: TeamWhereInput;
    create: TeamCreateInput;
    update: TeamUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: TeamWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortTeamsBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type TeamListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    TeamListTypeInfo,
    TeamListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  TeamListTypeInfo,
  TeamListTypeInfo['fields']
>;

export type StatListTypeInfo = {
  key: 'Stat';
  fields:
    | 'id'
    | 'match_id'
    | 'team_id'
    | 'player_id'
    | 'minutes_played'
    | 'team_possession_percentage'
    | 'xg'
    | 'shots'
    | 'goals'
    | 'tackles'
    | 'interceptions'
    | 'pressures'
    | 'passes'
    | 'completed_passes'
    | 'left_foot_passes'
    | 'right_foot_passes'
    | 'player_shots_faced'
    | 'player'
    | 'team';
  backing: {
    readonly id: string;
    readonly match_id?: number | null;
    readonly team_id?: number | null;
    readonly player_id?: number | null;
    readonly minutes_played?: string | null;
    readonly team_possession_percentage?: string | null;
    readonly xg?: number | null;
    readonly shots?: number | null;
    readonly goals?: number | null;
    readonly tackles?: number | null;
    readonly interceptions?: number | null;
    readonly pressures?: number | null;
    readonly passes?: number | null;
    readonly completed_passes?: number | null;
    readonly left_foot_passes?: number | null;
    readonly right_foot_passes?: number | null;
    readonly player_shots_faced?: number | null;
    readonly player?: string | null;
    readonly team?: string | null;
  };
  inputs: {
    where: StatWhereInput;
    create: StatCreateInput;
    update: StatUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: StatWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortStatsBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type StatListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    StatListTypeInfo,
    StatListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  StatListTypeInfo,
  StatListTypeInfo['fields']
>;

export type MatchListTypeInfo = {
  key: 'Match';
  fields:
    | 'id'
    | 'match_id'
    | 'match_date'
    | 'match_home_team_id'
    | 'match_away_team_id'
    | 'match_home_score'
    | 'match_away_score'
    | 'match_home_penalty_score'
    | 'match_away_penalty_score';
  backing: {
    readonly id: string;
    readonly match_id?: number | null;
    readonly match_date?: string | null;
    readonly match_home_team_id?: number | null;
    readonly match_away_team_id?: number | null;
    readonly match_home_score?: number | null;
    readonly match_away_score?: number | null;
    readonly match_home_penalty_score?: number | null;
    readonly match_away_penalty_score?: number | null;
  };
  inputs: {
    where: MatchWhereInput;
    create: MatchCreateInput;
    update: MatchUpdateInput;
  };
  args: {
    listQuery: {
      readonly where?: MatchWhereInput | null;
      readonly sortBy?: ReadonlyArray<SortMatchesBy> | null;
      readonly first?: Scalars['Int'] | null;
      readonly skip?: Scalars['Int'] | null;
    };
  };
};

export type MatchListFn = (
  listConfig: import('@keystone-next/keystone/schema').ListConfig<
    MatchListTypeInfo,
    MatchListTypeInfo['fields']
  >
) => import('@keystone-next/keystone/schema').ListConfig<
  MatchListTypeInfo,
  MatchListTypeInfo['fields']
>;

export type KeystoneListsTypeInfo = {
  readonly User: UserListTypeInfo;
  readonly Player: PlayerListTypeInfo;
  readonly PlayerImage: PlayerImageListTypeInfo;
  readonly Team: TeamListTypeInfo;
  readonly Stat: StatListTypeInfo;
  readonly Match: MatchListTypeInfo;
};

export namespace mockSession {
    let ok: boolean;
    namespace user {
        let image: null;
        let name: string;
        let email: string;
    }
    let expires: number;
}
export namespace mockProviders {
    let ok_1: boolean;
    export { ok_1 as ok };
    export namespace github {
        export let id: string;
        let name_1: string;
        export { name_1 as name };
        export let type: string;
        export let signinUrl: string;
        export let callbackUrl: string;
    }
    export namespace credentials {
        let id_1: string;
        export { id_1 as id };
        let name_2: string;
        export { name_2 as name };
        let type_1: string;
        export { type_1 as type };
        export let authorize: null;
        let credentials_1: null;
        export { credentials_1 as credentials };
    }
    export namespace email_1 {
        let id_2: string;
        export { id_2 as id };
        let type_2: string;
        export { type_2 as type };
        let name_3: string;
        export { name_3 as name };
    }
    export { email_1 as email };
}
export namespace mockCSRFToken {
    let ok_2: boolean;
    export { ok_2 as ok };
    export let csrfToken: string;
}
export namespace mockGithubResponse {
    let ok_3: boolean;
    export { ok_3 as ok };
    export let status: number;
    export let url: string;
}
export namespace mockCredentialsResponse {
    let ok_4: boolean;
    export { ok_4 as ok };
    let status_1: number;
    export { status_1 as status };
    let url_1: string;
    export { url_1 as url };
}
export namespace mockEmailResponse {
    let ok_5: boolean;
    export { ok_5 as ok };
    let status_2: number;
    export { status_2 as status };
    let url_2: string;
    export { url_2 as url };
}
export namespace mockSignOutResponse {
    let ok_6: boolean;
    export { ok_6 as ok };
    let status_3: number;
    export { status_3 as status };
    let url_3: string;
    export { url_3 as url };
}
export const server: import("msw/lib/glossary-58eca5a8").z;
//# sourceMappingURL=mocks.d.ts.map
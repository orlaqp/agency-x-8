<#import "template.ftl" as layout>
<@layout.registrationLayout displayInfo=social.displayInfo displayWide=(realm.password && social.providers??); section>
    <#if section = "header">
        <#--  ${msg("doLogIn")}  -->
    <#elseif section = "form">

    <img src="${url.resourcesPath}/${properties.kcLoginPageBackgroundImage}" alt="" class="ab-t-l-height" />
    <img class="${properties.kcLoginBackgroundImageClass}" src="${url.resourcesPath}/${properties.kcLoginBackgroundImage}" alt="" />        

    <div class="${properties.kcLoginClass!}">
        <div class="${properties.kcLoginFormContainerClass!}">    
            <div>
                <div class="js-tilt" data-tilt>
                    <!-- <img src="images/013.png" alt="IMG"> -->
                    <img class="${properties.kcLoginIllustrationClass}" src="${url.resourcesPath}/${properties.kcLoginIllustration}" alt="IMG">
                </div>
            </div>
        
            <div>
                <div id="kc-form" <#if realm.password && social.providers??>class="${properties.kcContentWrapperClass!}"</#if>>
                    <div id="kc-form-wrapper" <#if realm.password && social.providers??>class="${properties.kcFormSocialAccountContentClass!} ${properties.kcFormSocialAccountClass!}"</#if>>
                        <#if realm.password>
                            <form id="kc-form-login" onsubmit="login.disabled = true; return true;" action="${url.loginAction}" method="post">

                                <span class="login100-form-title">
                                    Member Login
                                </span>

                                <#--  username  -->

                                <div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
                                    <#if usernameEditDisabled??>
                                        <input tabindex="1" id="username" class="${properties.kcInputClass!} input100" name="username" value="${(login.username!'')}" type="text" placeholder="Email" disabled />
                                    <#else>
                                        <input tabindex="1" id="username" class="${properties.kcInputClass!} input100" name="username" value="${(login.username!'')}" type="text" autocomplete="off" autofocus placeholder="Email" />                                        
                                    </#if>
                                    <span class="focus-input100"></span>
                                    <span class="symbol-input100">
                                        <i class="fa fa-envelope" aria-hidden="true"></i>
                                    </span>
                                </div>
                                
                                <#--  <div class="${properties.kcFormGroupClass!}">
                                    <label for="username" class="${properties.kcLabelClass!}"><#if !realm.loginWithEmailAllowed>${msg("username")}<#elseif !realm.registrationEmailAsUsername>${msg("usernameOrEmail")}<#else>${msg("email")}</#if></label>

                                    <#if usernameEditDisabled??>
                                        <input tabindex="1" id="username" class="${properties.kcInputClass!}" name="username" value="${(login.username!'')}" type="text" disabled />
                                    <#else>
                                        <input tabindex="1" id="username" class="${properties.kcInputClass!}" name="username" value="${(login.username!'')}"  type="text" autofocus autocomplete="off" />
                                    </#if>
                                </div>  -->

                                <#--  password  -->

                                <div class="wrap-input100 validate-input" data-validate = "Password is required">
                                    <input tabindex="2" id="password" class="${properties.kcInputClass!} input100" name="password" type="password" placeholder="Password" autocomplete="off" />
                                    <span class="focus-input100"></span>
                                    <span class="symbol-input100">
                                        <i class="fa fa-lock" aria-hidden="true"></i>
                                    </span>
                                </div>

                                <#--  <div class="${properties.kcFormGroupClass!}">
                                    <label for="password" class="${properties.kcLabelClass!}">${msg("password")}</label>
                                    <input tabindex="2" id="password" class="${properties.kcInputClass!}" name="password" type="password" autocomplete="off" />
                                </div>  -->

                                <div class="${properties.kcFormGroupClass!} ${properties.kcFormSettingClass!}">
                                    <div id="kc-form-options">
                                        <#if realm.rememberMe && !usernameEditDisabled??>
                                            <div class="checkbox">
                                                <label>
                                                    <#if login.rememberMe??>
                                                        <input tabindex="3" id="rememberMe" name="rememberMe" type="checkbox" checked> ${msg("rememberMe")}
                                                    <#else>
                                                        <input tabindex="3" id="rememberMe" name="rememberMe" type="checkbox"> ${msg("rememberMe")}
                                                    </#if>
                                                </label>
                                            </div>
                                        </#if>
                                        </div>

                                </div>

                                <div class="container-login100-form-btn">
                                    <button class="login100-form-btn" name="login" id="kc-login" type="submit">
                                        Login
                                    </button>
                                </div>

                                <#--  <div id="kc-form-buttons" class="${properties.kcFormGroupClass!}">
                                    <input type="hidden" id="id-hidden-input" name="credentialId" <#if auth.selectedCredential?has_content>value="${auth.selectedCredential}"</#if>/>
                                    <input tabindex="4" class="${properties.kcButtonClass!} ${properties.kcButtonPrimaryClass!} ${properties.kcButtonBlockClass!} ${properties.kcButtonLargeClass!}" name="login" id="kc-login" type="submit" value="${msg("doLogIn")}"/>
                                </div>  -->

                                <div class="${properties.kcFormOptionsWrapperClass!}">
                                    <#if realm.resetPasswordAllowed>
                                        <#--  <span><a tabindex="5" href="${url.loginResetCredentialsUrl}">${msg("doForgotPassword")}</a></span>  -->

                                        <div class="text-center p-t-12">
                                            <span class="txt1">
                                                Forgot
                                            </span>
                                            <a class="txt2" href="${url.loginResetCredentialsUrl}">
                                                Username / Password?
                                            </a>
                                        </div>

                                    </#if>
                                </div>

                            </form>
                        </#if>
                        </div>
                        <#if realm.password && social.providers??>
                            <div id="kc-social-providers" class="${properties.kcFormSocialAccountContentClass!} ${properties.kcFormSocialAccountClass!}">
                                <ul class="${properties.kcFormSocialAccountListClass!} <#if social.providers?size gt 4>${properties.kcFormSocialAccountDoubleListClass!}</#if>">
                                    <#list social.providers as p>
                                        <li class="${properties.kcFormSocialAccountListLinkClass!}"><a href="${p.loginUrl}" id="zocial-${p.alias}" class="zocial ${p.providerId}"> <span>${p.displayName}</span></a></li>
                                    </#list>
                                </ul>
                            </div>
                        </#if>
                    </div>
            </div>
        </div>
    </div>
    
    <#elseif section = "info" >
        <#if realm.password && realm.registrationAllowed && !registrationDisabled??>
            <div id="kc-registration">
                <span>${msg("noAccount")} <a tabindex="6" href="${url.registrationUrl}">${msg("doRegister")}</a></span>
            </div>
        </#if>
    </#if>

</@layout.registrationLayout>

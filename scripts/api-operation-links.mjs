const labels = {
  "zh-CN": { prefix: "", authorization: "请求授权", tester: "在线签名调试" },
  "zh-HK": { prefix: "/zh-hk", authorization: "請求授權", tester: "網上簽名測試" },
  en: { prefix: "/en", authorization: "Request Authentication", tester: "Signed request tester" },
};

export function apiOperationLinks(operationId, locale) {
  const { prefix, authorization, tester } = labels[locale];
  return `<p className="yeahpay-api-utilities"><a href="${prefix}/api-authentication">${authorization}</a> · <a href="${prefix}/api-tester?operationId=${encodeURIComponent(operationId)}">${tester}</a></p>`;
}

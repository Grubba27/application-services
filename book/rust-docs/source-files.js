var N = null;var sourcesIndex = {};
sourcesIndex["autofill"] = {"name":"","dirs":[{"name":"db","dirs":[{"name":"models","files":["address.rs","credit_card.rs","mod.rs"]}],"files":["addresses.rs","credit_cards.rs","mod.rs","schema.rs","store.rs"]},{"name":"sync","dirs":[{"name":"address","files":["incoming.rs","mod.rs","outgoing.rs"]},{"name":"credit_card","files":["incoming.rs","mod.rs","outgoing.rs"]}],"files":["common.rs","engine.rs","mod.rs"]}],"files":["encryption.rs","error.rs","lib.rs"]};
sourcesIndex["cli_support"] = {"name":"","files":["fxa_creds.rs","lib.rs","prompt.rs"]};
sourcesIndex["crashtest"] = {"name":"","files":["lib.rs"]};
sourcesIndex["embedded_uniffi_bindgen"] = {"name":"","files":["main.rs"]};
sourcesIndex["error_support"] = {"name":"","files":["lib.rs"]};
sourcesIndex["fxa_client"] = {"name":"","dirs":[{"name":"internal","dirs":[{"name":"commands","files":["mod.rs","send_tab.rs"]},{"name":"oauth","files":["attached_clients.rs"]}],"files":["config.rs","device.rs","error.rs","http_client.rs","migrator.rs","mod.rs","oauth.rs","profile.rs","push.rs","scoped_keys.rs","scopes.rs","send_tab.rs","state_persistence.rs","telemetry.rs","util.rs"]}],"files":["lib.rs"]};
sourcesIndex["interrupt_support"] = {"name":"","files":["lib.rs"]};
sourcesIndex["logins"] = {"name":"","dirs":[{"name":"sync","files":["engine.rs","merge.rs","mod.rs","payload.rs","update_plan.rs"]}],"files":["db.rs","encryption.rs","error.rs","lib.rs","login.rs","migrate_sqlcipher_db.rs","schema.rs","store.rs","util.rs"]};
sourcesIndex["nimbus"] = {"name":"","dirs":[{"name":"client","files":["fs_client.rs","http_client.rs","mod.rs","null_client.rs"]}],"files":["config.rs","dbcache.rs","defaults.rs","enrollment.rs","error.rs","evaluator.rs","lib.rs","matcher.rs","persistence.rs","sampling.rs","updating.rs","versioning.rs"]};
sourcesIndex["nss"] = {"name":"","dirs":[{"name":"pk11","files":["context.rs","mod.rs","slot.rs","sym_key.rs","types.rs"]}],"files":["aes.rs","cert.rs","ec.rs","ecdh.rs","error.rs","lib.rs","pbkdf2.rs","pkixc.rs","secport.rs","util.rs"]};
sourcesIndex["nss_build_common"] = {"name":"","files":["lib.rs"]};
sourcesIndex["nss_sys"] = {"name":"","dirs":[{"name":"bindings","files":["blapit.rs","certdb.rs","keyhi.rs","keythi.rs","mod.rs","nss.rs","pk11pub.rs","pkcs11n.rs","pkcs11t.rs","pkixc.rs","plarena.rs","prerror.rs","prtypes.rs","secasn1t.rs","seccomon.rs","secitem.rs","seckey.rs","secmodt.rs","secoid.rs","secoidt.rs","secport.rs"]}],"files":["lib.rs"]};
sourcesIndex["places"] = {"name":"","dirs":[{"name":"api","files":["history.rs","matcher.rs","mod.rs","places_api.rs"]},{"name":"bookmark_sync","files":["engine.rs","incoming.rs","mod.rs","record.rs"]},{"name":"db","dirs":[{"name":"tx","files":["coop_transaction.rs","mod.rs"]}],"files":["db.rs","mod.rs","schema.rs"]},{"name":"history_sync","files":["engine.rs","mod.rs","plan.rs","record.rs"]},{"name":"import","dirs":[{"name":"fennec","files":["bookmarks.rs","history.rs"]}],"files":["common.rs","fennec.rs","ios_bookmarks.rs","mod.rs"]},{"name":"storage","dirs":[{"name":"bookmarks","files":["conversions.rs","fetch.rs","json_tree.rs","root_guid.rs"]}],"files":["bookmarks.rs","history.rs","history_metadata.rs","mod.rs","tags.rs"]},{"name":"types","files":["visit_transition_set.rs"]}],"files":["error.rs","ffi.rs","frecency.rs","hash.rs","lib.rs","match_impl.rs","observation.rs","types.rs","util.rs"]};
sourcesIndex["protobuf_gen"] = {"name":"","files":["main.rs"]};
sourcesIndex["push"] = {"name":"","dirs":[{"name":"internal","dirs":[{"name":"communications","files":["rate_limiter.rs"]},{"name":"storage","files":["db.rs","mod.rs","record.rs","schema.rs","types.rs"]}],"files":["communications.rs","config.rs","crypto.rs","mod.rs","subscriber.rs"]}],"files":["error.rs","lib.rs"]};
sourcesIndex["rc_crypto"] = {"name":"","dirs":[{"name":"aead","files":["aes_cbc.rs","aes_gcm.rs"]}],"files":["aead.rs","agreement.rs","constant_time.rs","contentsignature.rs","digest.rs","ece_crypto.rs","error.rs","hawk_crypto.rs","hkdf.rs","hmac.rs","lib.rs","pbkdf2.rs","rand.rs","signature.rs"]};
sourcesIndex["rc_log_ffi"] = {"name":"","files":["ios.rs","lib.rs","settable_log.rs"]};
sourcesIndex["restmail_client"] = {"name":"","files":["error.rs","lib.rs"]};
sourcesIndex["sql_support"] = {"name":"","files":["conn_ext.rs","each_chunk.rs","interrupt.rs","lib.rs","maybe_cached.rs","open_database.rs","query_plan.rs","repeat.rs"]};
sourcesIndex["sync15"] = {"name":"","dirs":[{"name":"clients","files":["engine.rs","mod.rs","record.rs","ser.rs"]}],"files":["bso_record.rs","changeset.rs","client.rs","coll_state.rs","collection_keys.rs","error.rs","key_bundle.rs","lib.rs","migrate_state.rs","record_types.rs","request.rs","state.rs","status.rs","sync.rs","sync_multiple.rs","telemetry.rs","token.rs","util.rs"]};
sourcesIndex["sync15_traits"] = {"name":"","files":["bridged_engine.rs","changeset.rs","client.rs","engine.rs","lib.rs","payload.rs","request.rs","server_timestamp.rs","telemetry.rs"]};
sourcesIndex["sync_guid"] = {"name":"","files":["lib.rs","rusqlite_support.rs","serde_support.rs"]};
sourcesIndex["sync_manager"] = {"name":"","files":["error.rs","lib.rs","manager.rs","types.rs"]};
sourcesIndex["tabs"] = {"name":"","dirs":[{"name":"sync","files":["engine.rs","mod.rs","record.rs","store.rs"]}],"files":["error.rs","lib.rs","storage.rs"]};
sourcesIndex["types"] = {"name":"","files":["lib.rs"]};
sourcesIndex["viaduct"] = {"name":"","dirs":[{"name":"backend","files":["ffi.rs"]},{"name":"headers","files":["name.rs"]}],"files":["backend.rs","error.rs","headers.rs","lib.rs","mozilla.appservices.httpconfig.protobuf.rs","settings.rs"]};
sourcesIndex["viaduct_reqwest"] = {"name":"","files":["lib.rs"]};
sourcesIndex["webext_storage"] = {"name":"","dirs":[{"name":"sync","files":["bridge.rs","incoming.rs","mod.rs","outgoing.rs"]}],"files":["api.rs","db.rs","error.rs","ffi.rs","lib.rs","migration.rs","schema.rs","store.rs"]};
createSourceSidebar();
